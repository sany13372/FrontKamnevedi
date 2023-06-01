import {FC, useState} from 'react';
import {IItem} from "@/types/all.interface";
import BlockItems from "@/components/UI/Slider/BlockItems/BlockItems";
import styles from './Slider.module.scss'

const Slider: FC<{ dataSlider: IItem[] }> = ({dataSlider}) => {
    const [slideIndex, setSlideIndex] = useState<number>(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    return (
        <div className={styles.slider}>
            <BlockItems dataSlider={dataSlider} nextSlide={nextSlide} prevSlide={prevSlide} slideIndex={slideIndex}/>
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;