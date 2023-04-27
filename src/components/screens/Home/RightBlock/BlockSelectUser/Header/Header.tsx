import {FC} from 'react';
import {useUsers} from "@/providers/UsersProvider";
import ClockImg from '../../../../../../../public/Clock.svg'
import Image from "next/image";
import Actions from './Actions/Actions'
import ResumeImg from '../../../../../../../public/Resume.svg'
import TranscriptImg from '../../../../../../../public/Transcript.svg'

const Header: FC = () => {
    const {selectUser} = useUsers()
    return (
        <div className={'flex items-center justify-between mb-8'}>
            <div className={'flex items-center'}>
                <h4 className={'text-xl'}>{selectUser.firstName} {selectUser.lastName}</h4>
                <div className={'flex items-center ml-6 gap-1'}>
                    <Image src={ClockImg} alt={'Картинка'}/>
                    <h4>Mar 25, 2023</h4>
                </div>
            </div>
            <div className={'flex items-center gap-4'}>
                <Actions title={'Resume'} image={ResumeImg}/>
                <Actions title={'Transcript'} image={TranscriptImg}/>
            </div>
        </div>
    );
}

export default Header;