import {FC, useEffect, useState} from 'react';
import SearchImg from '../../../../../../../public/Search.svg'
import Image from "next/image";
import {usersDefault, useUsers} from "@/providers/UsersProvider";
import Field from "@/components/UI/Field";

const SearchLine: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const {users, setUsers} = useUsers()
    const searchHandle = () => {
        if (searchQuery !== '') {
            setUsers(users.filter((user) => user.firstName === searchQuery))
        }
    }

    useEffect(() => {
        if (searchQuery === '') {
            setUsers(usersDefault)
        }
    }, [searchQuery])


    return (
        <div className={'flex py-1.5 px-2 border border-solid border-table-item'}>
            <Field value={searchQuery}
                   setValue={setSearchQuery}
                   className={'w-72'}
                   placeholder={'Search by name'}
            />
            <Image src={SearchImg} onClick={() => searchHandle()} alt={'Картинка'} className={'cursor-pointer'}/>
        </div>
    );
}

export default SearchLine;