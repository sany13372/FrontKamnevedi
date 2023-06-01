import {FC, useEffect} from 'react';
import PremiumImg from '@/assets/images/PremiumLittle.svg'
import LogoImg from '@/assets/images/КамневедыLittle.svg'
import LittleP from '@/assets/images/LittleP.svg'
import styles from './CenterTitle.module.scss'

const CenterTitle: FC = () => {
    const handleAnimate = () => {

    }
    return (
        <div className={styles.block}>
            <div className={styles.logo} onMouseDown={() => console.log('up')}>
                <LittleP className={styles.logoP}/>
                <LogoImg/>
            </div>
            <PremiumImg/>
        </div>
    );
}

export default CenterTitle;