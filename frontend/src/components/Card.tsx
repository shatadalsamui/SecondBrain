import {ShareIcon} from "../icons/ShareIcon.tsx";
import {DeleteIcon} from "../icons/DeleteIcon.tsx";
import {TwitterIcon} from "../icons/TwitterIcon.tsx";
import {YoutubeIcon} from "../icons/YoutubeIcon.tsx";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";

}

export function Card(props: CardProps) {
    return <div>
        <div className={" p-4 bg-white rounded-md border-gray-200 max-w-72 border"}>
            <div className={"flex justify-between"}>
                <div className={"flex items-center text-md"}>
                    <div className={"pr-2"}>
                        {props.type==="youtube" && <YoutubeIcon/>}
                        {props.type==="twitter" && <TwitterIcon/>}
                    </div>
                    {props.title}
                </div>
                <div className={"flex items-center"}>
                    <div className={"pr-2"}>
                        <a href={props.link} target={"_blank"}>
                            <ShareIcon/>
                        </a>
                    </div>
                    <div>
                        <DeleteIcon/>
                    </div>
                </div>
            </div>
            <div className={"pt-4"}>
                {props.type === "youtube" &&
                    <iframe className={"w-full"} src={props.link.replace("watch", "embed").replace("?v=","/")}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>}

                {props.type === "twitter" &&
                    <blockquote className={"twitter-tweet w-full"}>
                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                    </blockquote>}
            </div>
        </div>
    </div>
}