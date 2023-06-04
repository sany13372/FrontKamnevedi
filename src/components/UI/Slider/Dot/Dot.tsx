import {FC} from 'react';
import cn from 'clsx'
import styles from './Dot.module.scss'

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
        </button>
    );
}

export default Dot;