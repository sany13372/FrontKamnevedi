import {FC} from 'react';
import AvatarImg from '@/components/icons/AvatarComment.svg'

const CommentItem: FC<{ item: string }> = ({item}) => {
    return (
        <div className={'py-2 px-2 bg-videoplayer-bg mb-2'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-2'}>
                    <AvatarImg alt={'Картинка'}/>
                    <h4 className={'font-semibold'}>Alexandar</h4>
                    <span className={'bg-status-color px-1 py-1 rounded'}>Invited</span>
                </div>
                <div className={'flex items-center'}>
                    Mar 15, 2023
                </div>
            </div>
            <p>{item}</p>
        </div>
    );
}

export default CommentItem;