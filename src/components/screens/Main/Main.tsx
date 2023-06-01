import {FC, useEffect, useState} from 'react';
import SectionKamnevid from "./SectionKamnevid/SectionKamnevid";
import SectionPostyplenia from "./SectionPostyplenia/SectionPostyplenia";
import Header from "@/components/Header/Header";
import styles from './Main.module.scss'
import {IItem} from "@/types/all.interface";
import SlideImg1 from '@/assets/images/Slide1.png'
import "react-multi-carousel/lib/styles.css";
import SlideImg2 from '@/assets/images/Slide2.png'
import SlideImg3 from '@/assets/images/Slide3.png'
import SlideImg4 from '@/assets/images/Slide4.png'
import SlideImg5 from '@/assets/images/Slide5.png'
import Carousel from "react-multi-carousel";
import Slide from "@/components/UI/Slider/BlockItems/Slide/Slide";
import Dot from "@/components/UI/Slider/Dot/Dot";

export const data: IItem[] = [
    {
        id: '1',
        age: '2,6-23',
        size: '39 22 16',
        weight: 11050,
        location: 'Бразилия',
        price: 2550000,
        title: 'Зуб акулы Carcharocles megalodon',
        img: SlideImg1
    },
    {
        id: '2',
        age: '2,6-23',
        size: '39 22 16',
        weight: 11050,
        location: 'Бразилия',
        price: 2550000,
        title: 'Зуб акулы Carcharocles megalodon',
        img: SlideImg2
    },
    {
        id: '3',
        age: '2,6-23',
        size: '39 22 16',
        weight: 11050,
        location: 'Бразилия',
        price: 2550000,
        title: 'Зуб акулы Carcharocles megalodon',
        img: SlideImg3
    },
    {
        id: '4',
        age: '2,6-23',
        size: '39 22 16',
        weight: 11050,
        location: 'Бразилия',
        price: 2550000,
        title: 'Зуб акулы Carcharocles megalodon',
        img: SlideImg4
    },
    {
        id: '5',
        age: '2,6-23',
        size: '39 22 16',
        weight: 11050,
        location: 'Бразилия',
        price: 2550000,
        title: 'Зуб акулы Carcharocles megalodon',
        img: SlideImg5
    },
]
const Main: FC = () => {
    const [offsetY, setOffsetY] = useState<number>(0)
    const [scale, setScale] = useState<number>(0)
    const [show,setShow] = useState<boolean>(false)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            handleScroll()
            // Получаем максимальное значение скролла
            const maxScroll = scrollHeight - clientHeight;

            // Вычисляем масштаб
            const power = 10;
            const scale = 1 + (scrollTop / maxScroll) * power;
            setScale(scale)
        })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    console.log(offsetY)
    useEffect(() => {
        if (offsetY > 100) {
            setShow(true)
        }
        if (offsetY < 10){
            setOffsetY(11)
            setShow(false)
        }

    }, [offsetY])



    return (
        <>
            <div className={styles.layout}>
                <Header/>
                {!show && <SectionKamnevid scale={scale} offsetY={offsetY}/>}
                {/*{offsetY < 100 && <SectionKamnevid offsetY={scale}/>}*/}
            </div>
            <main>
                <SectionPostyplenia/>
                {/*<Slider dataSlider={data}/>*/}

            </main>
        </>
    );
}

export default Main;