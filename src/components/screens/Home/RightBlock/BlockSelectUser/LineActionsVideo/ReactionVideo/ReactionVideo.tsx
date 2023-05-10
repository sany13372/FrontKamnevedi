import {FC} from 'react';

interface IReactionVideo {
    title: string
    image: any
    select: (title: string) => void
}

const ReactionVideo: FC<IReactionVideo> = ({image, title, select}) => {
    return (
        <div onClick={() => select(title)}
             className={'py-2 px-2 cursor-pointer items-center flex gap-2 border-solid border border-table-item'}>
            {image}
            <h4 className={'text-primary'}>{title}</h4>
        </div>
    );
}

export default ReactionVideo;