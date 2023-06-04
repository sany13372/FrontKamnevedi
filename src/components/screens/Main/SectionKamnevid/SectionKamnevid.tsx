import {FC, useEffect} from 'react';
import styles from './SectionKamnevid.module.scss'
import LogoImg from '@/assets/images/Logo.svg'
import TitleImg from '@/assets/images/Камневеды.svg'
import PremiumImg from '@/assets/images/Premium.svg'
import MouseImg from '@/assets/images/Mouse.svg'
import cn from 'clsx'

const SectionKamnevid: FC<{ scale: number, offsetY: number }> = ({scale, offsetY}) => {
    //console.log(offsetY)
    //72
    //170
    if (offsetY === 170) {
       // console.log('sc', scale)
    }

   // console.log(offsetY)
    useEffect(() => {
            //postyp
            if (offsetY > 110) {

            }
        }, [offsetY])

        return (
            <section className={cn(styles.section, {})}
                     style={{transform: `scale(${(scale === 0 ? 1 : offsetY > 170 ? 1.67 : scale)})`}}>
                <LogoImg className={cn('pointer', {
                    [styles.logo]: offsetY > 72
                })}/>
                <TitleImg style={{transform: `scale(${scale === 0 ? 1 : scale})`}}
                          className={cn(styles.title, {
                              [styles.active]: offsetY > 72
                          })}/>
                <PremiumImg className={cn({
                    [styles.premiumimg]: offsetY > 72
                })}/>
                <div className={cn(styles.mouse, {
                    [styles.active]: offsetY > 72
                })}>
                    <MouseImg/>
                </div>
            </section>
        );
    }

    export default SectionKamnevid;