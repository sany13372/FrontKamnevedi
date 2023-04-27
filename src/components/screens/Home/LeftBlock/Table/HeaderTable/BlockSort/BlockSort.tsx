import {FC} from 'react';
import Image from "next/image";
import SortImage from '../../../../../../../../public/Sort.svg'

interface IBlockSort{
    title:string

}
const BlockSort: FC<IBlockSort> = ({title}) => {
    return (
        <div className={'flex gap-2 cursor-pointer items-center'}>
            <h4 className={'text-header-text'}>{title}</h4>
            <Image src={SortImage} alt={'Картинка'}/>
        </div>
    );
}

export default BlockSort;