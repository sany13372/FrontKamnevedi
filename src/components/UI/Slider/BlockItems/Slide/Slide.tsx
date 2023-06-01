import {FC} from 'react';
import {IItem} from "@/types/all.interface";
import FavoriteImg from '@/assets/images/FavoriteCart.svg'
import AgeImg from '@/assets/images/Age.svg'
import SizeImg from '@/assets/images/Size.svg'
import WeightImg from '@/assets/images/Weight.svg'
import PlaceImg from '@/assets/images/PositionImg.svg'
import styles from './Slide.module.scss'

import cn from 'clsx'
import {oswald} from "@/layouts/MainLayout/MainLayout";
import Info from "@/components/UI/Slider/BlockItems/Slide/Info/Info";

const Slide: FC<{ item: IItem }> = ({item}) => {
    return (
        <article className={styles.article}>
            <div className={styles.header} style={{backgroundImage: `url(${item.img.src})`}}>
                <FavoriteImg className={styles.favorite}/>
                <div className={cn(styles.price, oswald.className)}>
                    2 550 000 ₽
                </div>
            </div>
            <div className={styles.body}>
                <h4>{item.title}</h4>
                <div className={styles.block}>
                    <div className={styles.blockInfo}>
                        <Info type={'млн. лет'} title={'Возраст'} image={<AgeImg/>} value={item.age}/>
                        <Info type={'см'} image={<SizeImg/>} value={item.size}/>
                    </div>
                    <div className={styles.blockInfo}>
                        <Info title={'Место находки'} image={<PlaceImg/>} value={item.location}/>
                        <Info type={'Г'} title={'Вес'} image={<WeightImg className={styles.top}/>}
                              value={item.weight}/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Slide;