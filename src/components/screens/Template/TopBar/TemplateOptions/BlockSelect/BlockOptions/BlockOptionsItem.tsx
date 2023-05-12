import {FC, memo, useEffect, useState} from 'react';
import {IOptions} from './BlockOptions'
import Checkbox from '@/components/UI/CheckBox'
import {ITemplate} from "@/types/all.interface";
import {useTemplate} from "@/providers/TemplateProvider";

interface IBlockOptionsItem {
    item: IOptions,
    sortTemplate: (values: ITemplate[], setValues: any, typeSort: 'Email' | 'SMS' | 'WhatsApp', isCheck: boolean) => void
}

const BlockOptionsItem: FC<IBlockOptionsItem> = ({item, sortTemplate}) => {
    const [isCheck, setIsCheck] = useState<boolean>(true)
    const [skipUpdate, setSkipUpdate] = useState<number>(1)
    const {setDataTemplates, dataTemplates} = useTemplate()
    useEffect(() => {
        if (!skipUpdate && item.typeSort) {
            sortTemplate(dataTemplates, setDataTemplates, item.typeSort, isCheck)
        }
        setSkipUpdate(0)
    }, [isCheck])
    return (
        <div className={'py-2 px-6 flex items-center gap-2'}
        >
            <div className={'pb-1'}>
                <Checkbox
                    width={'w-[0.8rem]'}
                    height={'h-[0.8rem]'}
                    isCheked={isCheck}
                    onClick={() => setIsCheck(!isCheck)}/>
            </div>
            {item.icon}
            <div>
                {item.title}
            </div>
        </div>
    );
}

export default memo(BlockOptionsItem);