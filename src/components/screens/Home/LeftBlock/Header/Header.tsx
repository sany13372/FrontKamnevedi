import {Dispatch, FC, SetStateAction, useState} from 'react';
import SearchLine from './SearchLine/SearchLine'
import Pagination from './Pagination/Pagination'
import {IUser} from "@/types/all.interface";
import RemindButton from './RemindButton/RemindButton'
import ModalRemind from "@/components/UI/ModalRemind";
import {useUsers} from "@/providers/UsersProvider";

const Header: FC<{ selectedUsers: IUser[], setSelectedUsers: Dispatch<SetStateAction<IUser[]>> }> = ({
                                                                                                         selectedUsers,
                                                                                                         setSelectedUsers
                                                                                                     }) => {
    const [counts, setCounts] = useState<number>(0)
    const {isReminds} = useUsers()
    return (
        <div className={'flex items-center mb-4 justify-between'}>
            {selectedUsers.length !== 0 ?
                <RemindButton setCounts={setCounts} selectedUsers={selectedUsers.length}
                              setSelectedUsers={setSelectedUsers}/> : <h4 className={'text-xl'}>Candidates</h4>}
            <div className={'flex items-center'}>
                <SearchLine/>
                <Pagination/>
            </div>
            {isReminds && <ModalRemind counts={counts} />}
        </div>
    );
}

export default Header;