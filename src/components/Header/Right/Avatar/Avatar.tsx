import {FC} from 'react';
import Image from "next/image";
import AvatarImage from '../../../../../public/Avatar.svg'
import ArrowDown from '../../../../../public/ArrowDown.svg'

const Avatar: FC = () => {
    return (
        <div className={'flex gap-2'}>
            <Image  className={'cursor-pointer'} src={AvatarImage} alt={'Аватар'}/>
            <Image className={'cursor-pointer'} src={ArrowDown} alt={'Иконка'}/>
        </div>
    );
}

export default Avatar;