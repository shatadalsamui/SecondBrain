import {Input} from "../components/Input.tsx";
import {Button} from "../components/Button.tsx";
import {BrainIcon} from "../icons/BrainIcon.tsx";
import {useRef} from "react";
import {BACKEND_URL} from "../config.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            password,
            username
        });
        const jwt = response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
        //redirect the user to the dashboard
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
                <Button onClick={signin} loading={false} variant={"primary"} text={"Signin"} fullWidth={true}/>
            </div>
        </div>
    </div>
}