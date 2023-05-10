import {FC} from 'react';
import {useUsers} from "@/providers/UsersProvider";
import ClockImg from '@/components/icons/Clock.svg'
import Actions from './Actions/Actions'
import ResumeImg from '@/components/icons/Resume.svg'
import TranscriptImg from '@/components/icons/Transcript.svg'

const Header: FC = () => {
    const {selectUser} = useUsers()
    return (
        <div className={'flex items-center justify-between mb-8'}>
            <div className={'flex items-center'}>
                <h4 className={'text-xl'}>{selectUser.firstName} {selectUser.lastName}</h4>
                <div className={'flex items-center ml-6 gap-1'}>
                    <ClockImg alt={'Картинка'}/>
                    <h4>Mar 25, 2023</h4>
                </div>
            </div>
            <div className={'flex items-center gap-4'}>
                <Actions title={'Resume'} imag={<ResumeImg className={'cursor-pointer'}/>}/>
                <Actions title={'Transcript'} imag={<TranscriptImg className={'cursor-pointer'} />}/>
            </div>
        </div>
    );
}

export default Header;