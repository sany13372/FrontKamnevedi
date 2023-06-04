import {FC, useEffect, useState} from 'react';
import LeftBlock from "./LeftBlock/LeftBlock";
import styles from './Header.module.scss'
import RightBlock from "@/components/Header/RightBlock/RightBlock";
import CenterTitle from "@/components/Header/CenterTitle/CenterTitle";

const Header: FC = () => {
    const [offset,setOffset] = useState<number>(0)
    useEffect(()=>{
        document.addEventListener('scroll',() => {
            setOffset(window.pageYOffset)
        })
    },[])
    return (
        <header className={styles.header}>
            <LeftBlock/>
            {offset > 72 && <CenterTitle/>}
            <RightBlock/>
        </header>
    );
}

export default Header;