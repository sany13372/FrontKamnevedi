import {FC} from 'react';
import AvatarImage from '@/components/icons/Avatar.svg'
import ArrowDown from '@/components/icons/ArrowDown.svg'

const Avatar: FC = () => {
    return (
        <div className={'flex gap-2 items-center'}>
            <AvatarImage  className={'cursor-pointer'}  alt={'Аватар'}/>
            <ArrowDown className={'cursor-pointer'}  alt={'Иконка'}/>
        </div>
    );
}

export default Avatar;