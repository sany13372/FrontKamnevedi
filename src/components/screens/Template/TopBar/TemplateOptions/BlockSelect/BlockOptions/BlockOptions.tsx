import {FC, useMemo} from 'react';
import BlockOptionsItem from './BlockOptionsItem'
import EmailImg from '@/components/icons/TemplateEmail.svg'
import WhatsAppImg from '@/components/icons/Whatsapp.svg'
import SmsImg from '@/components/icons/TamplateDevice.svg'

export interface IOptions {
    icon: any
    title: string
    typeSort: string
}

const BlockOptions: FC = () => {

    const options: IOptions[] = useMemo(() => ([
        {
            typeSort: 'Email',
            icon: <EmailImg/>,
            title: 'Email'
        },
        {
            typeSort: 'SMS',
            icon: <SmsImg/>,
            title: 'SMS'
        },
        {
            typeSort: 'WhatsApp',
            icon: <WhatsAppImg/>,
            title: 'WhatsApp'
        },
    ]), [])

    return (
        <div className={'absolute z-10 top-[140%] left-[0%] flex flex-col bg-white py-0.5 filter-medium'}
             onClick={(e) => e.stopPropagation()}
        >
            {options.map((item) => <BlockOptionsItem item={item}/>)}
        </div>
    );
}

export default BlockOptions;