import {FC} from 'react';
import {useUsers} from "@/providers/UsersProvider";
import {useVideo} from "@/hooks/useVideo";
import ActionsVideo from './ActionsVideo'
const BlockVideo: FC = () => {
    const {selectUser} = useUsers()
    const {video, videoRef, actions} = useVideo()
    return (
        <div className={'mb-4 flex w-[100%] relative mb-[55px]   justify-center'}>
            <div
                className={'absolute  w-full text-white justify-between top-0 h-[35px] pt-4 px-4 flex items-center gradient'}>
                <div className={'flex items-center gap-3  cursor-pointer '}>
                    Jump to 1 2 3 4 5 6 7 8 9 10 +
                </div>
                <div className={'flex items-center gap-2'}>
                    <h4>
                        224 / 250
                    </h4>
                    <h4 className={'border-[1.5px] border-solid rounded'}>
                        Rank 2
                    </h4>
                </div>
            </div>
            <div className={'h-[500px] overflow-hidden   flex flex-auto justify-center'}>
                <video
                    className={'object-cover'}
                    controls={false}
                    preload="metadata"
                    poster={`${selectUser?.poster}`}
                    ref={videoRef}
                >
                    {/*<source src={`${selectUser?.videoUrl}`} type="video/mp4"/>*/}
                    <source src={`Video.mp4`} type="video/mp4"/>
                </video>
            </div>
            <div className={'absolute  w-full bottom-[-45px] '}>
                <div className={'w-full h-[5px] opacityVideo'}>
                    <div
                        className={'bg-red-500 h-[5px]'}
                        style={{width: `${video.progress}%`}}
                    />
                </div>
                <ActionsVideo video={video} actions={actions}/>
            </div>
        </div>
    );
}

export default BlockVideo;