import {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
import BlockOptions, {IOptions} from './BlockOptions/BlockOptions'
import Arrow from '@/components/icons/ArrowBlue.svg'
import EmailImg from "@/components/icons/TemplateEmail.svg";
import SmsImg from "@/components/icons/TamplateDevice.svg";
import WhatsAppImg from "@/components/icons/Whatsapp.svg";
import {templatesDefault, useTemplate} from "@/providers/TemplateProvider";
import {ITemplate} from "@/types/all.interface";
import {useOnClickOutside} from "@/hooks/useOnClickOutside";


const BlockSelect: FC = () => {
    const [showTypeTemplate, setShowTypeTemplate] = useState<boolean>(false)
    const {dataTemplates} = useTemplate()
    const ref = useRef(null)
    const elem = useOnClickOutside(ref, () => setShowTypeTemplate(false))

    const sortTemplate = (values: ITemplate[], setValues: any, typeSort: 'Email' | 'SMS' | 'WhatsApp', isCheck: boolean) => {
        if (isCheck) {
            setValues(templatesDefault)
        } else {
            const temps = values
                .filter((data) => data.type !== typeSort)
            setValues(temps)
        }
    }


    const options: IOptions[] = useMemo(() => ([
        {
            typeSort: 'Email',
            icon: <EmailImg/>,
            title: 'Email',
        },
        {
            typeSort: 'SMS',
            icon: <SmsImg/>,
            title: 'SMS',
        },
        {
            typeSort: 'WhatsApp',
            icon: <WhatsAppImg/>,
            title: 'WhatsApp',
        },
    ]), [dataTemplates])

    return (
        <div
            ref={ref}
            onClick={() => setShowTypeTemplate(!showTypeTemplate)}
            className={'relative'}>
            <div className={'flex cursor-pointer items-center gap-2'}>
                <div className={'text-header-text '}>
                    All templates
                </div>
                <Arrow className={'fill-arrow-pg cursor-pointer'}/>
            </div>
            <BlockOptions classNameBlock={'top-[140%] left-[0%]'} showTypeTemplate={showTypeTemplate}
                          options={options} sortTemplate={sortTemplate}/>
        </div>
    )
}

export default memo(BlockSelect)


