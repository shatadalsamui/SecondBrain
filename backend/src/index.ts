import express from "express";
import jwt from "jsonwebtoken";
import {ContentModel, LinkModel, UserModel} from "./db";
import {JWT_PASSWORD} from "./config";
import {userMiddleware} from "./middleware";
import {random} from "./utils";
import cors from "cors";

// Extend Express Request type
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
    //zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "Sign up successful"
        })
    } catch (e) {
        res.status(411).json({
            message: "Oops! Something went Wrong."
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {

    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    await ContentModel.create({
        title,
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })
    res.json({
        message: "Content added"
    })

})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")//get original user id s items
    res.json({
        content
    })
})
app.delete("/api/v1/content", userMiddleware, async (req, res) => {

    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
})
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {

    const share = req.body.share;
    if (share && req.userId) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            message: "/share/" + hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        });
        res.json({
            message: "Removed link "
        })

    }

})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }

    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "User not found"
        })
        return;
    }
    res.json({
        username: user.username,
        content: content
    })
})

app.listen(3000)




















