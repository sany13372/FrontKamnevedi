import {Dispatch, FC, SetStateAction} from 'react';
import {IUser} from "@/types/all.interface";
import BodyItem from './BodyItem/BodyItem'
import {useUsers} from "@/providers/UsersProvider";

interface IBody {
    setSelectedUsers: Dispatch<SetStateAction<IUser[]>>,
    allCheked: boolean,
    setAllCheked: Dispatch<SetStateAction<boolean>>
}

const Body: FC<IBody> = ({setSelectedUsers, allCheked, setAllCheked}) => {

    const {users} = useUsers()
    return (
        <div className={'overflow-auto h-[700px]'}>
            {users && users.map((user: IUser) => <BodyItem setSelectedUsers={setSelectedUsers} allCheked={allCheked}
                                                           setAllCheked={setAllCheked} key={user.firstName}
                                                           user={user}/>)}
        </div>
    );
}

export default Body;