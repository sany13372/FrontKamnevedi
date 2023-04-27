import {Dispatch, FC, SetStateAction} from 'react';
import PlayerImg from '../../../../../../../../../public/Player.svg'
import MessageImg from '../../../../../../../../../public/Message.svg'
import Image from "next/image";
import {useUsers} from "@/providers/UsersProvider";
import {IUser} from "@/types/all.interface";
import cn from 'clsx'
import PauseImg from '../../../../../../../../../public/Pause.svg'
import MessageWhiteImg from '../../../../../../../../../public/MessageWhite.svg'

interface IActions {
    user: IUser,
    isPlay: boolean,
    setIsPlay: Dispatch<SetStateAction<boolean>>
}

const Actions: FC<IActions> = ({user, setIsPlay, isPlay}) => {
    const {setSelectUser} = useUsers()
    const handlePlayVideo = () => {
        setSelectUser(user)
        //setIsPlay(!isPlay)
    }

    const stopVideo = () => {
        setIsPlay(false)
        //@ts-ignore
        setSelectUser({})
    }

    return (
        <div className={'flex items-center gap-5'}>
            {isPlay ? <Image src={PauseImg} alt={'Картинка'} onClick={() => stopVideo()}/> :
                <Image src={PlayerImg} onClick={() => handlePlayVideo()} className={cn('cursor-pointer white')}
                       alt={'Картинка'}/>}
            {isPlay ? <Image src={MessageWhiteImg} className={'cursor-pointer'} alt={'Картинка'}/> :
                <Image src={MessageImg} className={'cursor-pointer'} alt={'Картинка'}/>}
        </div>
    );
}

export default Actions;