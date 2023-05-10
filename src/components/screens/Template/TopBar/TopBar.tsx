import {FC, useState} from 'react';
import TemplateOptions from './TemplateOptions/TemplateOptions'
import SearchLine from "@/components/screens/Home/LeftBlock/Header/SearchLine/SearchLine";
import {useTemplate} from "@/providers/TemplateProvider";
import Pagination from "@/components/screens/Home/LeftBlock/Header/Pagination/Pagination";
import TemplateButton from './TemplateButton/TemplateButton'

const TopBar: FC = () => {
    const [searchQuery,setSearchQuery] = useState<string>('')
    const {setTemplates,setTemplatesPaginate,templatesPaginate,templates,dataTemplates} = useTemplate()
    return (
        <div className={`flex items-center justify-center h-[60px] bg-birus-bg px-2 flex-wrap min-[957px]:pr-12 min-[957px]:pl-10 py-2  min-[957px]:justify-between`}>
            <TemplateOptions/>
            <div className={'flex gap-4'}>
                <SearchLine className={'bg-white'} typeSort={'name'} placeholder={'Search templates'} defaultValue={templatesPaginate} value={templates} setValue={setTemplates} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <Pagination classNameHash={'bg-white'} valueDefault={dataTemplates} setValue={setTemplates} setValuePagination={setTemplatesPaginate} limitData={15}/>
                <TemplateButton/>
            </div>
        </div>
    );
}

export default TopBar;