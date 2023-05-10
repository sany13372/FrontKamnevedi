import {Dispatch, FC, SetStateAction} from 'react';
import NotificationImg from '@/components/icons/Notification.svg'
import {IUser} from "@/types/all.interface";
import {useUsers} from "@/providers/UsersProvider";

interface IRemindButton{
    selectedUsers:number,
    setSelectedUsers:Dispatch<SetStateAction<IUser[]>>
    setCounts:Dispatch<SetStateAction<number>>
}
const RemindButton: FC<IRemindButton> = ({selectedUsers,setSelectedUsers,setCounts}) => {
    const {setIsReminds} = useUsers()
    const handleRemind = () => {
        setIsReminds(true)
        setCounts(selectedUsers)
        setSelectedUsers([])
        setTimeout(() => {
            setIsReminds(false)
        },3000)
    }

    return (
        <div onClick={() => handleRemind()} className={'cursor-pointer py-2 px-2 flex gap-2 items-center border border-solid border-primary'}>
            <NotificationImg alt={'Картинка'}/>
            <h4 className={'text-primary'}>Remind {selectedUsers} selected</h4>
        </div>
    );
}

export default RemindButton;