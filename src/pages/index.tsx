import Main from "@/components/screens/Main/Main";
import Header from "@/components/Header/Header";
import SectionKamnevid from "@/components/screens/Main/SectionKamnevid/SectionKamnevid";
import {useEffect, useState} from "react";

export default function MainPage() {
    const [offsetY,setOffsetY] = useState<number>(0)
    const [scale,setScale] = useState<number>(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(()=>{
        window.addEventListener("scroll",() => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            handleScroll()
            // Получаем максимальное значение скролла
            const maxScroll = scrollHeight - clientHeight;

            // Вычисляем масштаб
            const power = 10;
            const scale = 1 + (scrollTop / maxScroll) * power;
            setScale(scale)
        })

        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <>
            <Main/>
        </>
    )
}
