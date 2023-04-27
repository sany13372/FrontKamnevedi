import {FC} from 'react';
import MessageImg from '../../../../../../../../public/SendMessage.svg'
import WhatsappImg from '../../../../../../../../public/Whatsapp.svg'
import TablerMessageImg from '../../../../../../../../public/tabler_message.svg'
import ConnectImg from '../../../../../../../../public/Connect.svg'
import Image from "next/image";

const Share: FC = () => {
    return (
        <div className={'flex gap-3'}>
            <h4 className={'text-gray-500'}>Share</h4>
            <Image src={MessageImg} className={'cursor-pointer'} alt={'Картинка'}/>
            <Image src={WhatsappImg} className={'cursor-pointer'} alt={'Картинка'}/>
            <Image src={TablerMessageImg} className={'cursor-pointer'} alt={'Картинка'}/>
            <Image src={ConnectImg} className={'cursor-pointer'} alt={'Картинка'}/>
        </div>
    );
}

export default Share;