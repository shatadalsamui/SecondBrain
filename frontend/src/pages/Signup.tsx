import {Input} from "../components/Input.tsx";
import {Button} from "../components/Button.tsx";
import {BrainIcon} from "../icons/BrainIcon.tsx";
import {useRef} from "react";
import axios from "axios";
import {BACKEND_URL} from "../config.ts";
import {useNavigate} from "react-router-dom";

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const naviagte = useNavigate()
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            password,
            username
    });
        naviagte("/signin");
        alert("You have Signed up!");
    }

    return <div className={"h-screen w-screen bg-gray-200 flex justify-center items-center"}>
        <div className={"bg-white rounded-xl border min-w-48 p-7"}>
            <div className={"flex items-center pb-4 justify-center gap-3"}>
                {<BrainIcon/>}
                <span className={"text-xl"}>
                Second Brain
            </span>
            </div>
            <div className={"flex flex-col gap-4"}>
                <Input reference={usernameRef} placeholder={"Username"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
            </div>
            <div className={"mt-4"}>
                <Button onClick={signup} loading={false} variant={"primary"} text={"Signup"} fullWidth={true}/>
            </div>
        </div>
    </div>
}