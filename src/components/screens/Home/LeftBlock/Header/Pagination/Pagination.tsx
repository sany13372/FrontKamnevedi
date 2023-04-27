import {FC} from 'react';
import TwoArrow from '../../../../../../../public/TwoArrowLeft.svg'
import Arrow from '../../../../../../../public/ArrowBlueLeft.svg'
import Image from "next/image";
import CountsPages from './CountsPages/CountsPages'
const Pagination: FC = () => {

    return (
        <div className={'ml-4 flex items-center gap-2'}>
            <Image src={TwoArrow} className={'hover:text-white cursor-pointer text-arrow-pg'} alt={'Картинка'}/>
            <Image src={Arrow} className={'text-arrow-pg cursor-pointer'} alt={'Картинка'}/>
            <CountsPages/>
            <input type="number" placeholder={'#'} className={'w-[40px] h-[40px] text-gray-500 text-center .placeholder-gray-900 border border-solid border-table-item'}/>
            <Image className={'rotate-180 cursor-pointer'} src={Arrow} alt={'Картинка'}/>
            <Image className={'rotate-180 cursor-pointer'} src={TwoArrow} alt={'Картинка'}/>
        </div>
    );
}

export default Pagination;