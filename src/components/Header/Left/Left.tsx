import {FC} from 'react';
import Logo from "@/components/Header/Left/Logo/Logo";
import Image from "next/image";
import ArrowDown from "../../../../public/ArrowDown.svg";
import ArrowLeft from "../../../../public/ArrowLeft.svg";

const Left: FC = () => {
    return (
        <div className={'flex max-[650px]:hidden items-center'}>
            <Logo/>
            <div className={'flex ml-2 min-[680px]:ml-10 gap-2 items-center'}>
                <h4 className={'text-white text-base text-center'}>Quick links</h4>
                <Image src={ArrowDown} className={'cursor-pointer'} alt={'Картинка'}/>
            </div>
            <div className={'flex gap-2 items-center min-[600px]:ml-2 min-[840px]:ml-20'}>
                <Image src={ArrowLeft} className={'cursor-pointer'} alt={'Картинка'}/>
                <h4 className={'text-white min-[900px]:text-2xl text-center'}>Oracle PHP Developer, Junior</h4>
            </div>
        </div>
    );
}

export default Left;