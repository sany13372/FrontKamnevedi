import {FC} from 'react';
import LogoImg from '@/components/icons/Logo.svg'

const Logo: FC = () => {
    return (
        <div>
            <LogoImg className={'cursor-pointer'}/>
        </div>
    );
}

export default Logo;