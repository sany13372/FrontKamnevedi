import {FC} from 'react';
import Image from "next/image";
import VideoImg from '../../../../../../../public/Player.png'

const BlockVideo: FC = () => {
    return (
        <div className={'mb-4'}>
            <Image src={VideoImg} alt={'Картинка'}/>
        </div>
    );
}

export default BlockVideo;