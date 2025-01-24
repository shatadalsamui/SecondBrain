import {Button} from "../components/Button.tsx";
import {ShareIcon} from "../icons/ShareIcon.tsx";
import {PlusIcon} from "../icons/PlusIcon.tsx";
import {Card} from "../components/Card.tsx";
import {CreateContentModal} from "../components/CreateContentModal.tsx";
import {useState} from "react";
import {Sidebar} from "../components/Sidebar.tsx";
import {useContent} from "../hooks/useContent.tsx";


export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const contents = useContent();

    return (<div className={"flex"}>
            <Sidebar/>
            <div className={"flex-1 p-4 min-h-screen bg-gray-100"}>
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }}/>
                <div className={"flex justify-end gap-4"}>
                    <Button onClick={() => {
                        setModalOpen(true)
                    }} variant={"primary"} text={"Add Content"} startIcon={<PlusIcon/>}></Button>
                    <Button variant={"secondary"} text={"Share Brain"} startIcon={<ShareIcon/>}></Button>
                </div>
                <div className={"flex pt-2 gap-4"}>
                    {contents.map(({type,link,title})=>
                        <Card title={title}
                              link={link}
                              type={type}/>
                    )}
                    <Card type="twitter" link={"https://x.com/kirat_tw/status/1633685473821425666"}
                          title={"First tweet"}/>
                    <Card type="youtube" link={"https://www.youtube.com/watch?v=y69ERL0l9tg"} title={"First video"}/>
                </div>

            </div>
        </div>
    )
}

