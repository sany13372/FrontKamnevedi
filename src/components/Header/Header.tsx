import {FC} from 'react';
import Left from "@/components/Header/Left/Left";
import Right from "@/components/Header/Right/Right";

const Header: FC = () => {
    return (
        <header className={'flex bg-header-bg max-[650px]:justify-end  min-[780px]:px-10 px-2 py-2.5 justify-between'}>
            <Left/>
            <Right/>
        </header>
    );
}

export default Header;