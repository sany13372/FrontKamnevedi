import {FC} from 'react';
import styles from './SectionKamnevid.module.scss'
import LogoImg from '@/assets/images/Logo.svg'
import TitleImg from '@/assets/images/Камневеды.svg'
import PremiumImg from '@/assets/images/Premium.svg'
import MouseImg from '@/assets/images/Mouse.svg'

const SectionKamnevid: FC<{ scale: number, offsetY: number }> = ({scale, offsetY}) => {
    return (
        <section className={styles.section}>
            <LogoImg className={'pointer'}/>
            <TitleImg style={{transform: `scale(${scale === 0 ? 1 : scale})`}} className={styles.title}/>
            <PremiumImg/>
            <div className={styles.mouse}>
                <MouseImg/>
            </div>
        </section>
    );
}

export default SectionKamnevid;