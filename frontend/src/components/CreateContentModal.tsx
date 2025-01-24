import axios from "axios";
import {CrossIcon} from "../icons/CrossIcon.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {useRef, useState} from "react";
import {BACKEND_URL} from "../config.ts";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type,
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }

    return <div>
        {open && <div className={"fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center"}>
            <div className={"flex flex-col justify-center"}>
                <span className={" bg-white opacity-100 p-6 rounded"}>
                    <div className={"flex justify-between items-center mb-4"}>
                        <div className={"text-xl"}>
                            Add Content
                        </div>
                        <div onClick={onClose} className={"flex justify-end cursor-pointer"}>
                            <CrossIcon/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <Input reference={titleRef} placeholder={"Title"}/>
                        <Input reference={linkRef} placeholder={"Link"}/>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <Button variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                    text={"Youtube"} onClick={() => setType(ContentType.Youtube)}/>
                            <Button variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                    text={"Twitter"} onClick={() => setType(ContentType.Twitter)}/>
                        </div>
                        <Button onClick={addContent} variant={"primary"} text={"Submit"}/>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}