import {FC} from 'react';
import ArrowDown from '@/components/icons/ArrowDown.svg'
import Mail from '@/components/icons/MailForward.svg'
import MoreImg from "@/components/icons/More.svg";


const BlockActions: FC = () => {
    return (
        <div className={'flex items-center gap-2 max-[950px]:order-1 max-[950px]:mb-2'}>
            <h4>64 candidates invited</h4>
            <div className={'py-2 pl-4 pr-3 bg-blue-bg flex cursor-pointer items-center gap-2'}>
                <Mail alt={'Картинка'}/>
                <h4 className={'text-white'}>Invite</h4>
                <ArrowDown alt={'Картинка'}/>
            </div>
            <MoreImg className={'cursor-pointer ml-2'} alt={'Картинка'}/>
        </div>
    );
}

export default BlockActions;