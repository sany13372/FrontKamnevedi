import {FC} from 'react';
import MessageImg from '@/components/icons/SendMessage.svg'
import WhatsappImg from '@/components/icons/WhatsappBlue.svg'
import TablerMessageImg from '@/components/icons/tabler_message.svg'
import ConnectImg from '@/components/icons/Connect.svg'

const Share: FC = () => {
    return (
        <div className={'flex gap-3 items-center'}>
            <h4 className={'text-gray-500'}>Share</h4>
            <MessageImg className={'cursor-pointer'} alt={'Картинка'}/>
            <WhatsappImg className={'cursor-pointer'} alt={'Картинка'}/>
            <TablerMessageImg className={'cursor-pointer'} alt={'Картинка'}/>
            <ConnectImg className={'cursor-pointer'} alt={'Картинка'}/>
        </div>
    );
}

export default Share;