import {FC} from 'react';
import Image from "next/image";
import BackImg from "../../../../../../../public/PlayerSkipBack.svg";
import PauseImg from "../../../../../../../public/Pause.svg";
import PlayImg from "../../../../../../../public/PlayerWhite.svg";
import GoImg from "../../../../../../../public/PlayerSkipGo.svg";
import BlockTimer from './BlockTimer/BlockTimer'
import ArrowImg from "../../../../../../../public/ArrowLeft.svg";
import {useUsers} from "@/providers/UsersProvider";

const ActionsVideo: FC = () => {
    const {video,actions} = useUsers()
    const handleVideoPlay = () => {
        actions.toggleVideo()
    }

    return (
        <div className={'flex items-center bg-black h-[50px] text-white px-4 px-4'}>
            <div className={'flex items-center gap-2'}>
                <Image src={BackImg} alt={'Картинка'} className={'cursor-pointer'} onClick={actions.revert}/>
                {video.isPlaying ? <Image src={PauseImg} className={'cursor-pointer'} alt={'Картинка'}
                                          onClick={() => handleVideoPlay()}/> :
                    <Image src={PlayImg} className={'cursor-pointer'} alt={'Картинка'}
                           onClick={() => handleVideoPlay()}/>}
                <Image src={GoImg} alt={'Картинка'} className={'cursor-pointer'} onClick={actions.fastForward}/>
            </div>
            <BlockTimer video={video}/>
            <div className={'flex items-center ml-3 gap-2'}>
                <h4>Question 2 of 10</h4>
                <Image src={ArrowImg} className={'cursor-pointer'} alt={'Картинка'}/>
            </div>
        </div>
    );
}

export default ActionsVideo;