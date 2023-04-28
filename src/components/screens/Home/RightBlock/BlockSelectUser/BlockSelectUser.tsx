import {FC, useEffect, useState} from 'react';
import Header from './Header/Header'
import BlockVideo from './BlockVideo/BlockVideo'
import LineActionsVideo from './LineActionsVideo/LineActionsVideo'
import CommentInput from './CommentInput/CommentInput'
import CommentItem from './CommentItem/CommentItem'
import {useUsers} from "@/providers/UsersProvider";

const BlockSelectUser: FC = () => {
    const {selectUser} = useUsers()
    const [comments, setComments] = useState<string[]>([])
    useEffect(() => {
        setComments(selectUser.comments)
    }, [])
    return (
        <div>
            <Header/>
            <BlockVideo/>
            <LineActionsVideo/>
            <CommentInput setComments={setComments}/>
            {comments.map((comment) => <CommentItem key={comment} item={comment}/>)}
        </div>
    );
}

export default BlockSelectUser;