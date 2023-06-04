import {FC, useEffect, useState} from 'react';
import styles from './SectionPostyplenia.module.scss'
import {gilroy} from "@/layouts/MainLayout/MainLayout";
import Carousel from "react-multi-carousel";
import Dot from "@/components/UI/Slider/Dot/Dot";
import Slide from "@/components/UI/Slider/BlockItems/Slide/Slide";
import {data} from "@/components/screens/Main/Main";
import {responsive} from "@/utils/data";
import {getSnapshot} from "@/utils/getSnapshot";

const SectionPostyplenia: FC = () => {
    const [showArrow, setShowArrow] = useState<boolean>(true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            getSnapshot(setShowArrow,536,false,true)
        });
        return () => {
            window.removeEventListener('resize',() => {
                getSnapshot(setShowArrow,536,false,true)
            })
        }
    }, [])

    return (
        <section className={styles.section} id={'postyp'}>
            <h5 className={gilroy.className}>Новинки</h5>
            <h3 className={gilroy.className}>Эксклюзивные поступления</h3>
            <Carousel
                showDots={true}
                containerClass={'carousel-container'}
                responsive={responsive}
                ssr={true}
                infinite={true}
                arrows={showArrow}
                customDot={<Dot/>}
            >
                {data.map((obj) => <Slide item={obj} key={obj.id}/>)}
            </Carousel>
            <h4>
                Посмотреть все новинки
            </h4>
        </section>
    );
}

export default SectionPostyplenia;