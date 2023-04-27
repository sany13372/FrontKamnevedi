import {FC, useState} from 'react';
import Header from './Header/Header'
import BlockVideo from './BlockVideo/BlockVideo'
import LineActionsVideo from './LineActionsVideo/LineActionsVideo'
import CommentInput from './CommentInput/CommentInput'
import CommentItem from './CommentItem/CommentItem'

const BlockSelectUser: FC = () => {
    const [comments,setComments] = useState<string[]>(['Hi bro','PP'])
    return (
        <div>
            <Header/>
            <BlockVideo/>
            <LineActionsVideo/>
            <CommentInput setComments={setComments}/>
            {comments.map((comment) => <CommentItem item={comment}/>)}
        </div>
    );
}

export default BlockSelectUser;