import {FC} from 'react';
import LogoImg from '../../../../../public/Logo.svg'
import Image from "next/image";
const Logo: FC = () => {
    return (
        <div>
            <Image src={LogoImg} alt={'Лого'}/>
        </div>
    );
}

export default Logo;