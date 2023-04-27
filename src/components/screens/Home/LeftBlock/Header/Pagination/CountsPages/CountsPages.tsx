import {FC} from 'react';

const CountsPages: FC = () => {
    const countsPages = [1, 2, 3, 4]
    return (
        <div className={'flex gap-2'}>
            {countsPages.map((item) => <div key={item} className={'hover:text-arrow-pg cursor-pointer'}>{item}</div>)}
        </div>
    );
}

export default CountsPages;