import {FC} from 'react';
import {useUsers} from "@/providers/UsersProvider";
import ClickPlay from './ClickPlay/ClickPlay'
import BlockSelectUser from './BlockSelectUser/BlockSelectUser'

const RightBlock: FC = () => {
    const {selectUser} = useUsers()

    return (
        <div className={'flex-[40%] pt-10 pr-10 pb-10 pl-5'}>
            {selectUser.firstName ? <BlockSelectUser/> : <ClickPlay/>}
        </div>
    );
}

export default RightBlock;