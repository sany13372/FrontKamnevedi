import {FC} from 'react';
import BtnSlider from "@/components/UI/Slider/BtnSlider/BtnSlider";
import {IItem} from "@/types/all.interface";
import Slide from "@/components/UI/Slider/BlockItems/Slide/Slide";
import styles from './BlockItems.module.scss'
import Carousel from "react-multi-carousel";

interface IBlockItems {
    nextSlide: () => void
    dataSlider: IItem[]
    prevSlide: () => void
    slideIndex: number
}

const BlockItems: FC<IBlockItems> = ({prevSlide, nextSlide, dataSlider, slideIndex}) => {
    const product = dataSlider.map((item) => (
        <Slide item={item} key={item.id}/>
    ));
    return (
        <div className={styles.block}>

            {/*<BtnSlider moveSlide={nextSlide} direction={"next"} />*/}
            {/*<BtnSlider moveSlide={prevSlide} direction={"prev"}/>*/}
        </div>
    );
}

export default BlockItems;