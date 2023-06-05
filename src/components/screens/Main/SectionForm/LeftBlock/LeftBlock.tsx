import {FC} from 'react';
import Image from "next/image";
import Img from "@/assets/images/FormImgPersonal.png";
import Imgmini from "@/assets/images/FormImgPersonalMini.png";
import styles from './LeftBlock.module.scss'

const LeftBlock: FC = () => {

    return (
        <div className={styles.block}>
            {/*<Image src={Img} className={styles.imgBig} alt={'Картинка'}/>*/}
            <Image className={styles.imgMini} src={Imgmini} alt={'Картинка'}/>
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