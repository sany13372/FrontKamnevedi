import {FC} from 'react';
import Image from "next/image";
import CrossImg from '../../../public/Cross.svg'
import {useUsers} from "@/providers/UsersProvider";

interface IModalRemind {
    counts: number,
}
const ModalRemind: FC<IModalRemind> = ({counts}) => {
    const {setIsReminds} = useUsers()
    return (
        <div className={'absolute flex top-0 left-[50%] w-[440px] py-2 px-2 bg-modal-remind text-medium-green justify-between'}>
            <h4>
                Reminders sent successfully to {counts} candidates
            </h4>
            <Image src={CrossImg} onClick={() => setIsReminds(false)} className={'cursor-pointer'} alt={'Картинка'}/>
        </div>
    );
}

export default ModalRemind;