import {SideBarItem} from "./SidebarItem.tsx";
import {TwitterIcon} from "../icons/TwitterIcon.tsx";
import {YoutubeIcon} from "../icons/YoutubeIcon.tsx";
import {BrainIcon} from "../icons/BrainIcon.tsx";

export function Sidebar() {
    return <div className={"h-screen bg-white border-r w-72 flex flex-col p-4"}>
        <div className={"flex gap-3 items-center"}>
            {<BrainIcon/>}
            <span className={"text-xl"}>
                Second Brain
            </span>
        </div>

        <div className={"p-2 pt-10"}>
            <SideBarItem text={"Twitter"} icon={<TwitterIcon/>}/>
            <SideBarItem text={"Youtube"} icon={<YoutubeIcon/>}/>
        </div>
    </div>
}