import {FC} from 'react';
import Image from "next/image";
import ImagePlayer from "../../../../../../public/BigPlayer.svg";

const ClickPlay: FC = () => {
    return (
        <div className={'bg-videoplayer-bg flex w-full h-full justify-center items-center'}>
            <div className={'flex flex-col items-center gap-5'}>
                <Image src={ImagePlayer} alt={'Картинка'}/>
                <h4>Click a completed interview to watch here</h4>
            </div>
        </div>
    );
}

export default ClickPlay;