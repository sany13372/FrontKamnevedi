import {FC} from 'react';
import Image from "next/image";

interface IReactionVideo{
    title:string
    image:string
}
const ReactionVideo: FC<IReactionVideo> = ({image,title}) => {
    return (
        <div className={'py-2 px-2 cursor-pointer flex gap-2 border-solid border border-table-item'}>
            <Image src={image} alt={'Картинка'}/>
            <h4 className={'text-primary'}>{title}</h4>
        </div>
    );
}

export default ReactionVideo;