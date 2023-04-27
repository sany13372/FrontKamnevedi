import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {IUser} from "@/types/all.interface";
import Actions from "./Actions/Actions";
import cn from 'clsx'
import {useUsers} from "@/providers/UsersProvider";

interface IBodyItem {
    user: IUser
    setSelectedUsers: Dispatch<SetStateAction<IUser[]>>
}

const BodyItem: FC<IBodyItem> = ({user, setSelectedUsers}) => {

    const [isCheck, setIsCheck] = useState<boolean>(false)
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const {selectUser, isReminds} = useUsers()
    const showConsist = (user.status == 'Shortlisted' || user.status == 'Completed' || user.status == 'On hold')

    useEffect(() => {
        if (selectUser.firstName === user.firstName) {
            setIsPlay(true)

        } else {
            setIsPlay(false)
        }

    }, [selectUser])

    useEffect(() => {
        if (isCheck) {
            setSelectedUsers((prev) => [...prev, user])
        } else {
            setSelectedUsers((prev) => prev.filter((usere: IUser) => usere.firstName !== user.firstName))
        }
    }, [isCheck])

    useEffect(() => {
        if (isReminds) {
            setIsCheck(false)
        }
    }, [isReminds])

    return (
        <div
            className={cn('group py-2 pl-3 border-b border-solid border-table-item grid grid-cols-[50px_140px_140px_140px_200px_80px] pr-3  cursor-pointer', {
                'hover:bg-table-item': (!isCheck && !isPlay && user.firstName !== selectUser.firstName),
                'bg-primary hover:bg-primary text-white': user.firstName === selectUser.firstName && isPlay,
                'bg-videoplayer-bg hover:bg-videoplayer-bg text-black': isCheck,
            })}>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    onClick={() => setIsCheck(prev => !prev)}
                    className={cn("relative float-left -ml-[1rem] mr-[6px] mt-[0.15rem] h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-table-item outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']   hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-['']", {
                        'checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-table-item dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]': isCheck,
                        'group-hover:dark:border-primary': !isCheck && !isPlay,
                    })}
                    checked={isCheck}
                    type="checkbox"
                    value=""
                    id="checkboxDefault"/>
            </div>
            <h4>{user.firstName}</h4>
            <h4>{user.lastName}</h4>
            <div>
                <span className={'bg-status-color px-1 py-1 rounded'}>{user.status}</span>
            </div>
            <div className={'flex items-center'}>
                <h5 className={'flex-[50%] text-center'}>{user.score}</h5>
                <h5 className={'flex-[50%]'}>{user.rank}</h5>
            </div>
            {showConsist &&
                <Actions user={user} isPlay={user.firstName === selectUser.firstName && isPlay} setIsPlay={setIsPlay}/>}
        </div>
    );
}

export default BodyItem;