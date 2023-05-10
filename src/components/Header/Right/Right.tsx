import {FC} from 'react';
import Plus from '@/components/icons/Plus.svg'
import Avatar from "@/components/Header/Right/Avatar/Avatar";

const Right: FC = () => {
    return (
        <div className={'flex max-[650px]:hidden items-center gap-10'}>
            <div className={'flex gap-2 items-center'}>
                <Plus  alt={'Картинка'} className={'cursor-pointer fill-white'}/>
                <h4 className={'text-white text-center'}>Create new job</h4>
            </div>
            <Avatar/>
        </div>
    );
}

export default Right;