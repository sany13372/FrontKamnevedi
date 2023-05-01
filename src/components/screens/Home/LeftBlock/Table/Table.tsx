import {Dispatch, FC, SetStateAction, useState} from 'react';
import HeaderTable from './HeaderTable/HeaderTable'
import Body from './Body/Body'
import {IUser} from "@/types/all.interface";

const Table: FC<{ setSelectedUsers: Dispatch<SetStateAction<IUser[]>> }> = ({setSelectedUsers}) => {
    const [allChecked, setAllChecked] = useState<boolean>(false)
    return (
        <div>
            <HeaderTable allChecked={allChecked} setAllChecked={setAllChecked}/>
            <Body setSelectedUsers={setSelectedUsers} setAllChecked={setAllChecked} allChecked={allChecked}/>
        </div>
    );
}

export default Table;