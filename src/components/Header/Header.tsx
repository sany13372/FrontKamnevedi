import {FC, useEffect, useState} from 'react';
import LeftBlock from "./LeftBlock/LeftBlock";
import styles from './Header.module.scss'
import RightBlock from "@/components/Header/RightBlock/RightBlock";
import CenterTitle from "@/components/Header/CenterTitle/CenterTitle";
import cn from 'clsx'
import {useRouter} from "next/router";

const Header: FC = () => {
    const [offset, setOffset] = useState<number>(0)
    const [showActions, setShowActions] = useState<boolean>(true)
    const router = useRouter()

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

        return () => {
            document.removeEventListener('scroll', () => {
                setOffset(window.pageYOffset)
            })

            window.removeEventListener('resize', () => {
                if (window.screen.width < 750) {
                    setShowActions(false)
                } else {
                    setShowActions(true)
                }
            });
        }
    }, [])

    return (
        <header className={cn(styles.header,{
            [styles.active]:offset > 1000 && router.pathname === '/'
        })}>
            <LeftBlock showActions={showActions}/>
            {offset > 72 && <CenterTitle/>}
            <RightBlock showActions={showActions}/>
        </header>
    );
}

export default Header;