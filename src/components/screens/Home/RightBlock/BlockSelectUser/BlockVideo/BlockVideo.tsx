import {FC} from 'react';
import Image from "next/image";
import VideoImg from '../../../../../../../public/Player.png'

const BlockVideo: FC = () => {
    return (
        <div className={'mb-4 flex w-[100%]'}>
            <Image src={VideoImg} className={'w-[100%]'} alt={'Картинка'}/>
        </div>
    );
}

export default BlockVideo;