import {Dispatch, FC, SetStateAction, useState} from 'react';
import {ITemplate} from "@/types/all.interface";
import BlockSort, {EnumsType} from "@/components/screens/Home/LeftBlock/Table/HeaderTable/BlockSort/BlockSort";
import {useTemplate} from "@/providers/TemplateProvider";

interface IHeaderTable{
    setAllChecked:Dispatch<SetStateAction<boolean>>,
    allChecked:boolean
}

const TableHeader: FC<IHeaderTable> = ({allChecked,setAllChecked}) => {
    const {templates,setTemplates} = useTemplate()
    const [typeSort, setTypeSort] = useState<string>('')

    return (
        <div className={'py-2 pl-3 bg-birus-bg  grid grid-cols-[3.6%_16.2%_11.7%_57.9%_7.3%_2.9%]  pr-3'}>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    onClick={() => setAllChecked(!allChecked)}
                    className="relative float-left -ml-[1rem] mr-[6px] mt-[0.15rem] h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-header-text outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-header-text dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    checked={allChecked}
                    value=""
                    onChange={() => {}}
                    id="checkboxDefault"/>
            </div>
            <BlockSort values={templates} setValues={setTemplates} title={'Name'} type={EnumsType.name} sortType={typeSort} setTypeSort={setTypeSort}/>
            <BlockSort values={templates} setValues={setTemplates} title={'Type'} type={EnumsType.type} sortType={typeSort} setTypeSort={setTypeSort}/>
            <BlockSort values={templates} setValues={setTemplates} title={'Text'} type={EnumsType.text} sortType={typeSort} setTypeSort={setTypeSort}/>
            <BlockSort values={templates} setValues={setTemplates} title={'Created'} type={null} sortType={typeSort} setTypeSort={setTypeSort}/>
            <div></div>
        </div>
    );
}

export default TableHeader;