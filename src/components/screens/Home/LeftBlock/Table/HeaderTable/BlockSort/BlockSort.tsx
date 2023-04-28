import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import Image from "next/image";
import SortImage from '../../../../../../../../public/Sort.svg'
import {useUsers} from "@/providers/UsersProvider";


export enum EnumsType {
    'firstName' = 'firstName',
    'lastName' = 'lastName',
    'status' = 'status',

}

interface IBlockSort {
    title: string
    type: EnumsType
    sortType: string
    setTypeSort: Dispatch<SetStateAction<string>>
}

const BlockSort: FC<IBlockSort> = ({title, sortType, setTypeSort, type}) => {
    const {setUsers, users} = useUsers()
    const [descending, setDescending] = useState<boolean>(true)

    const handleSort = () => {
        setTypeSort(type)
        setDescending(!descending)
    }

    useEffect(() => {
        if (sortType) {
            if (descending) {
                const sortedUsers = [...users.sort((a, b) => a[type].localeCompare(b[type]))]
                setUsers(sortedUsers)
            } else {
                const sortedUsers = [...users.sort((a, b) => b[type].localeCompare(a[type]))]
                setUsers(sortedUsers)
            }
        }
    }, [sortType,descending])

    return (
        <div className={'flex gap-2 cursor-pointer items-center'}
             onClick={() => handleSort()}
        >
            <h4 className={'text-header-text'}>{title}</h4>
            <Image src={SortImage} alt={'Картинка'}/>
        </div>
    );
}

export default BlockSort;