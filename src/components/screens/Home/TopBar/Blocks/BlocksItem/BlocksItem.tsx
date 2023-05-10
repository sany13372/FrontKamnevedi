import {FC, useEffect, useState} from 'react';
import {IBlocks} from "@/components/screens/Home/TopBar/Blocks/Blocks";
import {useUsers} from "@/providers/UsersProvider";
import RemoveImg from '@/components/icons/Remove.svg'
import cn from 'clsx'

const BlocksItem: FC<{ item: IBlocks }> = ({item}) => {
    const {users, setUsers, usersPaginate} = useUsers()
    const [isFilter, setIsFilter] = useState<boolean>(false)

    useEffect(() => {
        if (isFilter) {
            setUsers(users.filter((user) => user.status === item.type))
        } else {
            setUsers(usersPaginate)
        }
    }, [isFilter])

    return (
        <div
            className={cn('border min-[1100px]:px-2 min-[1100px]:py-2 items-center  border-black flex gap-2 border-solid ',
                {
                    'bg-table-item text-primary border-primary': isFilter
                }
            )}>
            <div onClick={() => setIsFilter(true)} className={'flex items-center cursor-pointer gap-1'}>
                <h4>
                    {item.type}
                </h4>
                <h4>
                    {item.counts}
                </h4>
            </div>
            {isFilter && <RemoveImg className={'cursor-pointer'} onClick={() => setIsFilter(false)}
                                    alt={'Картинка'}/>}
        </div>
    );
}

export default BlocksItem;