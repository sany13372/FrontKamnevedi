import {FC} from 'react';
import Plus from '../../../../public/Plus.svg'
import Image from "next/image";
import Avatar from "@/components/Header/Right/Avatar/Avatar";
const Right: FC = () => {
    return (
        <div className={'flex max-[650px]:hidden items-center gap-10'}>
            <div className={'flex gap-2'}>
                <Image src={Plus} alt={'Картинка'} className={'cursor-pointer'}/>
                <h4 className={'text-white text-center'}>Create new job</h4>
            </div>
            <Avatar/>
        </div>
    );
}

export default Right;