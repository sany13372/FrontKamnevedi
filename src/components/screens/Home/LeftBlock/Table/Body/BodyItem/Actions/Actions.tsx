import {Dispatch, FC, SetStateAction, useEffect, useRef} from 'react';
import PlayerImg from '../../../../../../../../../public/Player.svg'
import MessageImg from '../../../../../../../../../public/Message.svg'
import Image from "next/image";
import {useUsers} from "@/providers/UsersProvider";
import {IUser} from "@/types/all.interface";
import cn from 'clsx'
import PauseImg from '../../../../../../../../../public/Pause.svg'
import MessageWhiteImg from '../../../../../../../../../public/MessageWhite.svg'
import PlayerWhiteImg from '../../../../../../../../../public/PlayerWhite.svg'

interface IActions {
    user: IUser,
    isPlay: boolean,
    setIsPlay: Dispatch<SetStateAction<boolean>>
}

const Actions: FC<IActions> = ({user, setIsPlay, isPlay}) => {
    const {selectUser,video, actions} = useUsers()
    const handleVideoPlay = () => {
        actions.toggleVideo()
    }

    return (
        <div className={'flex items-center gap-5 relative'}>
            {selectUser.id !== user.id &&
                <Image src={PlayerImg} className={cn('absolute  top-[10%] right-[100%] cursor-pointer white')}
                       alt={'Картинка'}/>}
            {selectUser.id === user.id &&
                <>
                    {video.isPlaying ? <Image src={PauseImg} onClick={() => handleVideoPlay()}
                                     className={cn('cursor-pointer white absolute top-[17%] right-[103%]')}
                                     alt={'Картинка'}/> :
                        <Image src={PlayerWhiteImg} alt={'Картинка'}
                               className={'cursor-pointer absolute top-[10%] right-[100%]'}
                               onClick={() => handleVideoPlay()}/>
                    }
                </>
            }
            {selectUser.id === user.id ?
                <Image src={MessageWhiteImg} className={'absolute top-[15%] left-[20%] cursor-pointer'}
                       alt={'Картинка'}/> :
                <Image src={MessageImg} className={'cursor-pointer absolute top-[10%] left-[20%]'} alt={'Картинка'}/>}
        </div>
    );
}

export default Actions;