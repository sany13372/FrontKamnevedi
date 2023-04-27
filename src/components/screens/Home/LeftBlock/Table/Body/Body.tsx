import {Dispatch, FC, SetStateAction} from 'react';
import {IUser} from "@/types/all.interface";
import BodyItem from './BodyItem/BodyItem'
import {useUsers} from "@/providers/UsersProvider";

const Body: FC<{setSelectedUsers:Dispatch<SetStateAction<IUser[]>>}> = ({setSelectedUsers}) => {

    const {users} = useUsers()

    return (
        <div className={'overflow-auto h-[680px]'}>
            {users && users.map((user:IUser) => <BodyItem setSelectedUsers={setSelectedUsers}  key={user.firstName} user={user}/>)}
        </div>
    );
}

export default Body;