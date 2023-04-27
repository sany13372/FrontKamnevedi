import {FC} from 'react';
import Image from "next/image";

interface IActions{
    title:string
    image:string
}
const Actions: FC<IActions> = ({image,title}) => {
    return (
        <div className={'flex gap-1'}>
            <Image className={'cursor-pointer'} src={image} alt={'Картинка'}/>
            <h4 className={'text-primary'}>{title}</h4>
        </div>
    );
}

export default Actions;