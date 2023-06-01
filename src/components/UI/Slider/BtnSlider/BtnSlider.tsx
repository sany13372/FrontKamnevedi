import {FC} from 'react';
import Arrow from '@/assets/images/ArrowSlide.svg'
import styles from './BtnSlider.module.scss'
import cn from 'clsx'

interface IBtnSlider {
    moveSlide: () => void
    direction: string
}

const BtnSlider: FC<IBtnSlider> = ({moveSlide, direction}) => {
    return (
        <button
            onClick={moveSlide}
            className={cn(styles.button,{
                [styles.active]:direction === "next"
            })}
        >
            <Arrow className={direction === "next" && [styles.arrow]}/>
        </button>
    );
}

export default BtnSlider;