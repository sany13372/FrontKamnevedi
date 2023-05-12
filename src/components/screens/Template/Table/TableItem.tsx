import {Dispatch, FC, memo, SetStateAction, useCallback, useEffect, useMemo, useState} from 'react';
import {ITemplate} from "@/types/all.interface";
import cn from 'clsx'
import {useTemplate} from "@/providers/TemplateProvider";
import MoreImg from '@/components/icons/More.svg'
import {IOptions} from "@/components/screens/Template/TopBar/TemplateOptions/BlockSelect/BlockOptions/BlockOptions";
import EditImg from "@/components/icons/Edit.svg";
import DeletedImg from "@/components/icons/Trash.svg";
import CopyImg from "@/components/icons/Copy.svg";
import BlockEdit from "@/components/screens/Template/Table/BlockEdit/BlockEdit";
import {getRandomNumber} from "@/utils/randomNumber";

interface ITableItem {
    template: ITemplate
    setSelectedTemplates: Dispatch<SetStateAction<string[]>>
    allChecked: boolean
    editItem: string
    setEditItem: Dispatch<SetStateAction<string>>
}

const TableItem: FC<ITableItem> = ({
                                       template,
                                       allChecked,
                                       setSelectedTemplates,
                                       setEditItem,
                                       editItem
                                   }) => {
    const [isCheck, setIsCheck] = useState<boolean>(false)

    useEffect(() => {
        if (allChecked) {
            setIsCheck(true)
        } else {
            setIsCheck(false)
        }
    }, [allChecked])

    useEffect(() => {
        if (isCheck) {
            setSelectedTemplates((prev) => [...prev, template.id])
        } else {
            setSelectedTemplates((prev) => prev.filter((prevTemplate: string) => prevTemplate !== template.id))
        }
    }, [isCheck])

    return (
        <div
            className={cn('group relative py-2 pl-3 bg-white text-black border-b border-solid border-table-item  grid grid-cols-[3.6%_16.2%_11.7%_57.9%_7.3%_2.9%]  pr-3', {
                'hover:bg-table-item': !isCheck
            })}>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsCheck(prev => !prev)
                    }}
                    className={cn("relative float-left z-1 -ml-[1rem] mr-[6px] mt-[0.15rem] h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-table-item outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']   hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-['']", {
                        'checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-table-item dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]': isCheck,
                        'group-hover:dark:border-primary': !isCheck,
                    })}
                    onChange={(e) => {
                    }}
                    checked={isCheck || false}
                    type="checkbox"
                    value=""
                    id="checkboxDefault"/>
            </div>
            <div>
                {template.name}
            </div>
            <div>
                {template.type}
            </div>
            <p>
                {template.text}
            </p>
            <div className={'ml-2'}>
                Mar 02
            </div>
            <div className={'flex items-center relative'}>
                <MoreImg className={'cursor-pointer'}
                         onClick={() => editItem !== template.id ? setEditItem(template.id) : setEditItem('')}
                         alt={'Картинка'}/>
                {editItem === template.id && <BlockEdit setEditItem={setEditItem} classNameBlock={'right-0 top-[80%]'}
                                                        template={template}/>
                }
            </div>
        </div>
    );
}

export default memo(TableItem);