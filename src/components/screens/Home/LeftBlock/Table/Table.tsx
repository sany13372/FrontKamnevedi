import {Dispatch, FC, SetStateAction, useState} from 'react';
import HeaderTable from './HeaderTable/HeaderTable'
import Body from './Body/Body'
import {IUser} from "@/types/all.interface";
const Table: FC<{setSelectedUsers:Dispatch<SetStateAction<IUser[]>>}> = ({setSelectedUsers}) => {
    const [allCheked,setAllCheked] = useState<boolean>(false)

    return (
        <div>
            <HeaderTable allCheked={allCheked} setAllCheked={setAllCheked}/>
            <Body setSelectedUsers={setSelectedUsers} setAllCheked={setAllCheked} allCheked={allCheked}/>
        </div>
    );
}

export default Table;