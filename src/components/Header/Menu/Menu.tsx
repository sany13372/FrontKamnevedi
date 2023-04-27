import {Dispatch, FC, SetStateAction} from 'react';
import Image from "next/image";
import CrossImg from '../../../../public/CrossWhite.svg'
import Logo from "@/components/Header/Left/Logo/Logo";

const Menu: FC<{setShowMenu:Dispatch<SetStateAction<boolean>>}> = ({setShowMenu}) => {
    return (
        <div className={'absolute top-0 left-[50%] w-[50%] h-[100%] bg-primary'}>
            <div className={'flex justify-between items-center pr-2 pl-2'}>
                <Logo/>
                <Image src={CrossImg} className={'cursor-pointer'} onClick={() => setShowMenu(false)} alt={'Картинка'}/>
            </div>
            <div className={'flex flex-col'}>
            </div>
        </div>
    );
}

export default Menu;