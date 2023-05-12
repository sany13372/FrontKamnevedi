import {FC, memo} from 'react';
import BlockOptionsItem from './BlockOptionsItem'
import cn from 'clsx'
import {ITemplate} from "@/types/all.interface";

export interface IOptions {
    icon: any
    title: string
    typeSort?: 'Email' | 'SMS' | 'WhatsApp'
    click?: () => void
}

interface IBlockOptions {
    options: IOptions[],
    classNameBlock: string
    showTypeTemplate: boolean
    sortTemplate: (values: ITemplate[], setValues: any, typeSort: 'Email' | 'SMS' | 'WhatsApp',isCheck:boolean) => void
}

const BlockOptions: FC<IBlockOptions> = ({options, classNameBlock, showTypeTemplate, sortTemplate}) => {

    return (
        <div
            className={cn(`absolute z-10 ${classNameBlock} flex flex-col bg-white py-0.5 filter-medium`, {
                'hidden': !showTypeTemplate
            })}
            onClick={(e) => e.stopPropagation()}
        >
            {options.map((item) => <BlockOptionsItem key={item.title} item={item} sortTemplate={sortTemplate}/>)}
        </div>
    );
}

export default memo(BlockOptions);