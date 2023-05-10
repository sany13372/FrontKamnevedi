import {Dispatch, FC, SetStateAction} from 'react';
import PlayerImg from '@/components/icons/Player.svg'
import MessageImg from '@/components/icons/Message.svg'
import {useUsers} from "@/providers/UsersProvider";
import {IUser} from "@/types/all.interface";
import cn from 'clsx'
import PauseImg from '@/components/icons/Pause.svg'
import MessageWhiteImg from '@/components/icons/MessageWhite.svg'
import PlayerWhiteImg from '@/components/icons/PlayerWhite.svg'

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
                <PlayerImg  className={cn('absolute  top-[10%] right-[100%] cursor-pointer white')}
                       alt={'Картинка'}/>}
            {selectUser.id === user.id &&
                <>
                    {video.isPlaying ? <PauseImg onClick={() => handleVideoPlay()}
                                     className={cn('cursor-pointer white absolute top-[17%] right-[103%]')}
                                     alt={'Картинка'}/> :
                        <PlayerWhiteImg alt={'Картинка'}
                               className={'cursor-pointer absolute top-[10%] right-[100%]'}
                               onClick={() => handleVideoPlay()}/>
                    }
                </>
            }
            {selectUser.id === user.id ?
                <MessageWhiteImg  className={'absolute top-[15%] left-[20%] cursor-pointer'}
                       alt={'Картинка'}/> :
                <MessageImg className={'cursor-pointer absolute top-[10%] left-[20%]'} alt={'Картинка'}/>}
        </div>
    );
}

export default Actions;