import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import Img from "@/assets/images/FormImgPersonal.png";
import Imgmini from "@/assets/images/FormImgPersonalMini.png";
import styles from './LeftBlock.module.scss'
import {getSnapshot} from "@/utils/getSnapshot";

const LeftBlock: FC = () => {
    const [showLittleImg, setShowLittleImg] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            getSnapshot(setShowLittleImg,550,true,false)
        });
        return () => {
            window.removeEventListener('resize',() => {
                getSnapshot(setShowLittleImg,550,true,false)
            })
        }
    }, [])
    return (
        <div className={styles.block}>
            {!showLittleImg ? <Image src={Img} alt={'Картинка'}/> : <Image src={Imgmini} alt={'Картинка'}/>}
            <div>
                <div>
                    <h3>Сергей</h3>
                    <h3>Валерия</h3>
                </div>
                <h6>Ваши персональные эксперты по камням</h6>
            </div>
        </div>
    );
}

export default LeftBlock;