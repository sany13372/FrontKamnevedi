import {FC} from 'react';
import CountItem from './CountItem/CountItem'

interface ICountsPages {
    currentPage: number
    paginationGroup: any
    changePage: (item: number) => void
}

const CountsPages: FC<ICountsPages> = ({currentPage, changePage, paginationGroup}) => {
    return (
        <div className={'flex gap-2 '}>
            {paginationGroup().map((item: number) => <CountItem key={item} currentPage={currentPage} item={item}
                                                                changePage={changePage}/>)}
        </div>
    );
}

export default CountsPages;