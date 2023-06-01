import {Children, FC} from 'react';
import {data} from "@/components/screens/Main/Main";
import cn from 'clsx'
import styles from './Dot.module.scss'

interface IDot{
    // onClick:() => void
    // rest:any
}

const Dot: FC = (props:any) => {
    const {
        onMove,
        index,
        active,
        carouselState: {currentSlide, deviceType}
    } = props;
    return (
        <button
            className={cn(styles.dot,{
                [styles.active]:active
            })}
            onClick={() => props.onClick()}
        >
            {Children.toArray(data[index].id)[index]}
        </button>
    );
}

export default Dot;