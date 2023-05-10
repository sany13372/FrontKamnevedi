import {FC, useEffect, useState} from 'react';
import Share from './Share/Share'
import ReactionVideo from './ReactionVideo/ReactionVideo'
import LikeImg from '@/components/icons/Like.svg'
import DisLikeImg from '@/components/icons/DissLike.svg'
import HoldImg from '@/components/icons/tabler_hand-stop.svg'
import {useUsers} from "@/providers/UsersProvider";
import {IUser} from "@/types/all.interface";

const LineActionsVideo: FC = () => {
    const {selectUser, setUsers, users, setSelectUser} = useUsers()
    const [type, setType] = useState<string>('')

    useEffect(() => {
        if (type) {
            setUsers(users.map((user: IUser) => {
                if (user.firstName === selectUser.firstName) {
                    return {...user, status: type ? type : 'Reject'};
                } else {
                    return user;
                }
            }));
            setSelectUser({...selectUser, status: type})
            if (type === 'Reject') {
                //@ts-ignore
                setSelectUser({})
            }
        }
    }, [type])

    return (
        <div className={'flex items-center flex-wrap justify-between'}>
            <Share/>
            <div className={'flex items-center gap-2'}>
                <ReactionVideo title={'Shortlisted'} select={setType} image={<LikeImg />}/>
                <ReactionVideo title={'Reject'} select={setType} image={<DisLikeImg/>}/>
                <ReactionVideo title={'On hold'} select={setType} image={<HoldImg/>}/>
            </div>
        </div>
    );
}

export default LineActionsVideo;