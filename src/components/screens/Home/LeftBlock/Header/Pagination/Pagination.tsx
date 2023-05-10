import {FC, useEffect, useState} from 'react';
import TwoArrow from '@/components/icons/TwoArrowLeft.svg'
import Arrow from '@/components/icons/ArrowBlueLeft.svg'
import CountsPages from './CountsPages/CountsPages'

interface IPagination{
    valueDefault:any
    setValue:any
    setValuePagination:any
    limitData:number
    classNameHash?:string
}
const Pagination: FC<IPagination> = ({setValuePagination,setValue,valueDefault,limitData,classNameHash}) => {
    //todo:Изменить после лимит на динамический
    const dataLimit = limitData
    const pageLimit = 5
    const [currentPage, setCurrentPage] = useState(1);

    const getPaginationGroup = () => {
        let counts = []
        for (let i = 0; i < Math.ceil(valueDefault.length / dataLimit); i++) {
            counts.push(i)
        }
        return counts.map((_, idx) => idx + 1);
    };

    function goToNextPage() {
        if (currentPage < getPaginationGroup().length) {
            setCurrentPage((currentPage) => currentPage + 1);
        }
    }

    function goToPreviousPage() {
        if (currentPage !== 1) {
            setCurrentPage((currentPage) => currentPage - 1);
        }
    }

    function changePage(item: number) {
        setCurrentPage(item);
    }

    const getPaginatedData = () => {
        const startIndex = (currentPage * dataLimit) - dataLimit;
        const endIndex = startIndex + dataLimit;
        return valueDefault.slice(startIndex, endIndex);
    };

    const lastPage = () => {
        setCurrentPage(getPaginationGroup().length)
    }

    const firstPage = () => {
        setCurrentPage(1)
    }

    useEffect(() => {
        setValuePagination(getPaginatedData())
        setValue(getPaginatedData())
    }, [currentPage])

    return (
        <div className={'ml-4 flex items-center gap-2'}>
            <TwoArrow className={'white hover:text-white cursor-pointer text-arrow-pg'} alt={'Картинка'}
                      onClick={() => firstPage()}/>
            <Arrow className={'text-arrow-pg cursor-pointer'} onClick={() => goToPreviousPage()}
                   alt={'Картинка'}/>
            <CountsPages currentPage={currentPage} paginationGroup={getPaginationGroup} changePage={changePage}/>
            <input type="number" placeholder={'#'}
                   className={`w-[40px] h-[40px] text-gray-500 text-center .placeholder-gray-900 border border-solid border-table-item ${classNameHash} `}/>
            <Arrow className={'rotate-180 cursor-pointer'} onClick={() => goToNextPage()} alt={'Картинка'}/>
            <TwoArrow className={'rotate-180 cursor-pointer'} alt={'Картинка'} onClick={() => lastPage()}/>
        </div>
    );
}

export default Pagination;