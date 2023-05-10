import {FC} from 'react';
import Logo from "@/components/Header/Left/Logo/Logo";
import ArrowDown from "@/components/icons/ArrowDown.svg";
import ArrowLeft from "@/components/icons/ArrowLeft.svg";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin'], weight: ['400', '700']})

const Left: FC = () => {
    return (
        <div className={`flex max-[650px]:hidden items-center ${inter.className}`}>
            <Logo/>
            <div className={'flex ml-2 min-[680px]:ml-10 gap-2 items-center'}>
                <h4 className={'text-white text-base text-center'}>Quick links</h4>
                <ArrowDown className={'cursor-pointer'} alt={'Картинка'}/>
            </div>
            <div className={'flex gap-2 items-center min-[600px]:ml-2 min-[840px]:ml-20'}>
                <ArrowLeft className={'cursor-pointer'} alt={'Картинка'}/>
                <h4 className={'text-white min-[900px]:text-2xl text-center '}>Oracle PHP Developer, Junior</h4>
            </div>
        </div>
    );
}

export default Left;