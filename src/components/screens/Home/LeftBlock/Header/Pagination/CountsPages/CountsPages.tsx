import {FC} from 'react';
import cn from 'clsx'

interface ICountsPages {
    currentPage: number
    paginationGroup: any
    changePage: (item: number) => void
}

const CountsPages: FC<ICountsPages> = ({currentPage, changePage, paginationGroup}) => {
    return (
        <div className={'flex gap-2 '}>
            {paginationGroup().map((item: number) =>
                <div key={item}
                     onClick={() => changePage(item)}
                     className={cn('hover:text-arrow-pg cursor-pointer', {
                         'text-arrow-pg':currentPage === item
                     })}>
                    {item}
                </div>
            )}
        </div>
    );
}

export default CountsPages;