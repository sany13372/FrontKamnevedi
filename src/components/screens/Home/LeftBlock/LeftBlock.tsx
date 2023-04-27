import {FC, useState} from 'react';
import Header from "./Header/Header";
import Table from './Table/Table'
import {IUser} from "@/types/all.interface";

const LeftBlock: FC = () => {
    const [selectedUsers,setSelectedUsers] = useState<IUser[]>([])
    return (
        <div className={'px-10 pt-8 pb-20 basis-2/4'}>
            <Header selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
            <Table setSelectedUsers={setSelectedUsers}/>
        </div>
    );
}

export default LeftBlock;