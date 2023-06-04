import {FC} from 'react';
import styles from './SectionForm.module.scss'
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from "./RightBlock/RightBlock";
import Image from "next/image";
import Shine from '@/assets/images/shine.png'

const SectionForm: FC = () => {
    return (
        <section className={styles.section}>
            <h3>Если вы мечтаете о каком-то необычном экземпляре,
                то мы найдем его для вас или <p>сделаем под заказ эксклюзивную вещь из камня</p></h3>
            <div>
                <LeftBlock/>
                <RightBlock/>
            </div>
            <Image src={Shine} alt={'Картинка'}/>
        </section>
    );
}

export default SectionForm;