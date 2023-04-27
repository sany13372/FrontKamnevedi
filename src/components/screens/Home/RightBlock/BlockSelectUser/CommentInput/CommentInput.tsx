import {Dispatch, FC, SetStateAction, useState} from 'react';
import Field from "@/components/UI/Field";

const CommentInput: FC<{ setComments: Dispatch<SetStateAction<string[]>> }> = ({setComments}) => {
    const [message, setMessage] = useState<string>('')
    const sendMessage = (e: any) => {
        if (e.key === 'Enter') {
            setComments((prev) => [...prev, message])
            setMessage('')
        }
    }

    return (
        <div className={'pr-4 mt-4 mb-2'}>
            <Field value={message} handleKey={sendMessage} setValue={setMessage}
                   className={'w-full border border-solid  border-table-item px-2 py-2'}
                   placeholder={'Add a comment...'}/>
        </div>
    );
}

export default CommentInput;