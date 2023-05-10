import {Dispatch, FC, SetStateAction, useState} from 'react';
import SearchLine from './SearchLine/SearchLine'
import Pagination from './Pagination/Pagination'
import {IUser} from "@/types/all.interface";
import RemindButton from './RemindButton/RemindButton'
import ModalRemind from "@/components/UI/ModalRemind";
import {usersDefault, useUsers} from "@/providers/UsersProvider";

interface IHeader {
    selectedUsers: IUser[],
    setSelectedUsers: Dispatch<SetStateAction<IUser[]>>
}

const Header: FC<IHeader> = ({selectedUsers, setSelectedUsers}) => {
    const [counts, setCounts] = useState<number>(0)
    const {isReminds} = useUsers()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const {users, setUsers, usersPaginate,setUsersPaginate} = useUsers()

    return (
        <div className={'flex items-center mb-4 justify-between'}>
            {selectedUsers.length !== 0 ?
                <RemindButton setCounts={setCounts} selectedUsers={selectedUsers.length}
                              setSelectedUsers={setSelectedUsers}/> : <h4 className={'text-xl'}>Candidates</h4>}
            <div className={'flex items-center'}>
                <SearchLine
                    typeSort={'firstName'}
                    placeholder={'Search by name'}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    value={users}
                    setValue={setUsers}
                    defaultValue={usersPaginate}
                />
                <Pagination limitData={15} valueDefault={usersDefault} setValue={setUsers} setValuePagination={setUsersPaginate}/>
            </div>
            {isReminds && <ModalRemind counts={counts}/>}
        </div>
    );
}

export default Header;