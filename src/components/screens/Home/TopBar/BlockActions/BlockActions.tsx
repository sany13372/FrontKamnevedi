import {FC} from 'react';
import ArrowDown from '../../../../../../public/ArrowDown.svg'
import Mail from '../../../../../../public/MailForward.svg'
import Image from "next/image";
import MoreImg from "../../../../../../public/More.svg";


const BlockActions: FC = () => {
    return (
        <div className={'flex items-center gap-2 max-[950px]:order-1 max-[950px]:mb-2'}>
            <h4>64 candidates invited</h4>
            <div className={'py-2 pl-4 pr-3 bg-blue-bg flex cursor-pointer items-center gap-2'}>
                <Image src={Mail} alt={'Картинка'}/>
                <h4 className={'text-white'}>Invite</h4>
                <Image src={ArrowDown} alt={'Картинка'}/>
            </div>
            <Image src={MoreImg} className={'cursor-pointer ml-2'} alt={'Картинка'}/>
        </div>
    );
}

export default BlockActions;