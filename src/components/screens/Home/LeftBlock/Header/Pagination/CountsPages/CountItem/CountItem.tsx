import {FC} from 'react';
import cn from "clsx";

interface ICountItem {
    currentPage: number
    item:number
    changePage: (item: number) => void
}

const CountItem: FC<ICountItem> = ({item,changePage,currentPage}) => {
    return (
        <div key={item}
             onClick={() => changePage(item)}
             className={cn('hover:text-arrow-pg cursor-pointer', {
                 'text-arrow-pg':currentPage === item
             })}>
            {item}
        </div>
    );
}

export default CountItem;