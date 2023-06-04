import {FC, useEffect, useState} from 'react';
import LeftBlock from "./LeftBlock/LeftBlock";
import styles from './Header.module.scss'
import RightBlock from "@/components/Header/RightBlock/RightBlock";
import CenterTitle from "@/components/Header/CenterTitle/CenterTitle";

const Header: FC = () => {
    const [offset, setOffset] = useState<number>(0)
    const [showActions, setShowActions] = useState<boolean>(true)
    useEffect(() => {
        document.addEventListener('scroll', () => {
            setOffset(window.pageYOffset)
        })
        window.addEventListener('resize', () => {
            if (window.screen.width < 750) {
                setShowActions(false)
            } else {
                setShowActions(true)
            }
        });
    }, [])
    return (
        <header className={styles.header}>
            <LeftBlock showActions={showActions}/>
            {offset > 72 && <CenterTitle/>}
            <RightBlock showActions={showActions}/>
        </header>
    );
}

export default Header;