import {FC, useEffect, useState} from 'react';
import TwoArrow from '../../../../../../../public/TwoArrowLeft.svg'
import Arrow from '../../../../../../../public/ArrowBlueLeft.svg'
import Image from "next/image";
import CountsPages from './CountsPages/CountsPages'
import {usersDefault, useUsers} from "@/providers/UsersProvider";

const Pagination: FC = () => {
    const {setUsers, setUsersPaginate} = useUsers()
    //todo:Изменить после лимит на динамический
    const dataLimit = 15
    const pageLimit = 5
    const [currentPage, setCurrentPage] = useState(1);

    const getPaginationGroup = () => {
        let counts = []
        for (let i = 0; i < Math.ceil(usersDefault.length / dataLimit); i++) {
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
        return usersDefault.slice(startIndex, endIndex);
    };

    const lastPage = () => {
        setCurrentPage(getPaginationGroup().length)
    }

    const firstPage = () => {
        setCurrentPage(1)
    }

    useEffect(() => {
        setUsersPaginate(getPaginatedData())
        setUsers(getPaginatedData())
    }, [currentPage])

    return (
        <div className={'ml-4 flex items-center gap-2'}>
            <Image src={TwoArrow} className={'white hover:text-white cursor-pointer text-arrow-pg'} alt={'Картинка'} onClick={() => firstPage()}/>
            <Image src={Arrow} className={'text-arrow-pg cursor-pointer'} onClick={() => goToPreviousPage()}
                   alt={'Картинка'}/>
            <CountsPages currentPage={currentPage} paginationGroup={getPaginationGroup} changePage={changePage}/>
            <input type="number" placeholder={'#'}
                   className={'w-[40px] h-[40px] text-gray-500 text-center .placeholder-gray-900 border border-solid border-table-item'}/>
            <Image className={'rotate-180 cursor-pointer'} onClick={() => goToNextPage()} src={Arrow} alt={'Картинка'}/>
            <Image className={'rotate-180 cursor-pointer'} src={TwoArrow} alt={'Картинка'} onClick={() => lastPage()}/>
        </div>
    );
}

export default Pagination;