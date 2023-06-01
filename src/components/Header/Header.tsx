import {FC, useEffect, useState} from 'react';
import LeftBlock from "./LeftBlock/LeftBlock";
import styles from './Header.module.scss'
import RightBlock from "@/components/Header/RightBlock/RightBlock";
import CenterTitle from "@/components/Header/CenterTitle/CenterTitle";

const Header: FC = () => {
    const [offset,setOffset] = useState<number>(0)
    useEffect(()=>{

    },[])
    return (
        <header className={styles.header}>
            <LeftBlock/>
            {offset > 80 && <CenterTitle/>}
            <CenterTitle/>
            <RightBlock/>
        </header>
    );
}

export default Header;