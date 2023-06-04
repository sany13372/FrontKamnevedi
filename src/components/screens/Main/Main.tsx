import {FC, useEffect, useRef, useState} from 'react';
import SectionKamnevid from "./SectionKamnevid/SectionKamnevid";
import SectionPostyplenia from "./SectionPostyplenia/SectionPostyplenia";
import {IItem} from "@/types/all.interface";
import SlideImg1 from '@/assets/images/Slide1.png'
import "react-multi-carousel/lib/styles.css";
import SlideImg2 from '@/assets/images/Slide2.png'
import SlideImg3 from '@/assets/images/Slide3.png'
import SlideImg4 from '@/assets/images/Slide4.png'
import SlideImg5 from '@/assets/images/Slide5.png'
import SectionForm from "@/components/screens/Main/SectionForm/SectionForm";
import BlockTitle from "@/components/screens/Main/BlockTitle/BlockTitle";
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

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
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        const scrollTarget = document.getElementById('postyp')

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

    useEffect(() => {
        window.onwheel = e => {
            if (e.deltaY >= 0) {
                // Scrolling Down with mouse
                //  console.log('Scroll Down');
                if (window.pageYOffset > 140 && window.pageYOffset < 700) {
                    //  console.log(scrollTarget)
                    console.log('work')
                    window.scrollBy({
                       // top: 1100,
                        // behavior: 'smooth'
                    });
                }
            } else {
                // Scrolling Up with mouse
                if (offsetY < 1099) {
                    //scroll.scrollToTop();
                    // scroll.scrollTo()
                    window.scrollBy({
                        //top: 110,
                        // behavior: 'smooth'
                    });
                }
                //console.log('Scroll Up');
            }
        }
    }, [offsetY])

    return (
        <>
            <SectionKamnevid scale={scale} offsetY={offsetY}/>
            <BlockTitle offsetY={offsetY}/>
            <SectionPostyplenia/>
            <SectionForm/>
        </>
    );
}

export default Main;