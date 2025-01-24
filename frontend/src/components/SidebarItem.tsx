import {type ReactElement} from "react";

export function SideBarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}) {
    return <div className={"flex gap-4 py-3 pt-4 items-center cursor-pointer hover:bg-gray-200 rounded max-w-56 pl-3 "}>
        {icon}{text}
    </div>
}