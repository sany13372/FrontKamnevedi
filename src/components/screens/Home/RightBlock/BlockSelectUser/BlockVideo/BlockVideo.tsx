import {FC} from 'react';
import Image from "next/image";
import ReactPlayer from "react-player";
import {useUsers} from "@/providers/UsersProvider";
import {useVideo} from "@/hooks/useVideo";

const BlockVideo: FC = () => {
    const {selectUser} = useUsers()
    return (
        <div className={'mb-4 flex w-[100%]'}>
            <video
                controls
                preload="metadata"
                poster={`${selectUser?.poster}`}
            >
                {/*<source src={`${selectUser?.videoUrl}`} type="video/mp4"/>*/}
                <source src={`Video.mp4`} type="video/mp4"/>
            </video>
        </div>
    );
}

export default BlockVideo;