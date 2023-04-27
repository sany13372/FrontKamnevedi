import {Dispatch, FC, SetStateAction} from 'react';
import HeaderTable from './HeaderTable/HeaderTable'
import Body from './Body/Body'
import {IUser} from "@/types/all.interface";
const Table: FC<{setSelectedUsers:Dispatch<SetStateAction<IUser[]>>}> = ({setSelectedUsers}) => {
    return (
        <div>
            <HeaderTable/>
            <Body setSelectedUsers={setSelectedUsers}/>
        </div>
    );
}

export default Table;