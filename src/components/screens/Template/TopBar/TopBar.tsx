import {Dispatch, FC, SetStateAction, useState} from 'react';
import TemplateOptions from './TemplateOptions/TemplateOptions'
import SearchLine from "@/components/screens/Home/LeftBlock/Header/SearchLine/SearchLine";
import {useTemplate} from "@/providers/TemplateProvider";
import Pagination from "@/components/screens/Home/LeftBlock/Header/Pagination/Pagination";
import ButtonDeleted from "@/components/screens/Template/TopBar/ButtonDeleted/ButtonDeleted";
import ButtonBlue from "@/components/UI/ButtonBlue";
import PlusImg from "@/components/icons/Plus.svg";

interface ITopBar {
    selectedTemplates: string[]
    setSelectedTemplates: Dispatch<SetStateAction<string[]>>
    setAllChecked: Dispatch<SetStateAction<boolean>>
}

const TopBar: FC<ITopBar> = ({setSelectedTemplates, selectedTemplates, setAllChecked}) => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const {
        setTemplates,
        setTemplatesPaginate,
        templatesPaginate,
        templates,
        dataTemplates,
        setModalType
    } = useTemplate()

    return (
        <div
            className={`flex items-center justify-center h-[60px] bg-birus-bg px-2 flex-wrap min-[957px]:pr-12 min-[957px]:pl-10 py-2  min-[957px]:justify-between`}>

            {selectedTemplates.length === 0 ? <TemplateOptions/> :
                <ButtonDeleted selectedTemplates={selectedTemplates} setAllChecked={setAllChecked}
                               setSelectedTemplates={setSelectedTemplates}/>}
            <div className={'flex gap-4'}>
                <SearchLine className={'bg-white'} typeSort={'name'} placeholder={'Search templates'}
                            defaultValue={templatesPaginate} value={templates} setValue={setTemplates}
                            searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <Pagination classNameHash={'bg-white'} valueDefault={dataTemplates} setValue={setTemplates}
                            setValuePagination={setTemplatesPaginate} limitData={15}/>
                <ButtonBlue className={'py-2 pl-4 pr-3 bg-blue-bg flex cursor-pointer items-center gap-2'}
                            onClick={() => setModalType('create')}>
                    <PlusImg className={'fill-white'}/>
                    <h4 className={'text-white'}>Create new template</h4>
                </ButtonBlue>
            </div>
        </div>
    );
}

export default TopBar;