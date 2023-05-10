import {FC} from 'react';
import BackImg from "@/components/icons/PlayerSkipBack.svg";
import PauseImg from "@/components/icons/Pause.svg";
import PlayImg from "@/components/icons/PlayerWhite.svg";
import GoImg from "@/components/icons/PlayerSkipGo.svg";
import BlockTimer from './BlockTimer/BlockTimer'
import ArrowImg from "@/components/icons/ArrowLeft.svg";
import {useUsers} from "@/providers/UsersProvider";

const ActionsVideo: FC = () => {
    const {video, actions} = useUsers()
    const handleVideoPlay = () => {
        actions.toggleVideo()
    }

    return (
        <div className={'flex items-center bg-black h-[50px] text-white px-4 px-4'}>
            <div className={'flex items-center gap-2'}>
                <BackImg alt={'Картинка'} className={'cursor-pointer'} onClick={actions.revert}/>
                {video.isPlaying ? <PauseImg className={'cursor-pointer'} alt={'Картинка'}
                                             onClick={() => handleVideoPlay()}/> :
                    <PlayImg className={'cursor-pointer'} alt={'Картинка'}
                             onClick={() => handleVideoPlay()}/>}
                <GoImg alt={'Картинка'} className={'cursor-pointer'} onClick={actions.fastForward}/>
            </div>
            <BlockTimer video={video}/>
            <div className={'flex items-center ml-3 gap-2'}>
                <h4>Question 2 of 10</h4>
                <ArrowImg className={'cursor-pointer'} alt={'Картинка'}/>
            </div>
        </div>
    );
}

export default ActionsVideo;