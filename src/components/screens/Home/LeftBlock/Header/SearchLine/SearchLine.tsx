import {FC, useEffect, useState} from 'react';
import SearchImg from '../../../../../../../public/Search.svg'
import Image from "next/image";
import {useUsers} from "@/providers/UsersProvider";
import Field from "@/components/UI/Field";
import {IUser} from "@/types/all.interface";

const SearchLine: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const {users, setUsers,usersPaginate} = useUsers()

    const filterSearchName = (array:any) => {
        return array.filter((item:IUser) => item.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
    };

    const searchHandle = () => {
        if (searchQuery !== '') {
            setUsers(filterSearchName(users))
        }
    }

    useEffect(() => {
        if (searchQuery === '') {
            setUsers(usersPaginate)
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