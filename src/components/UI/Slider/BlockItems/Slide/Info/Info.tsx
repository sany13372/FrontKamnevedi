import {FC} from 'react';
import cn from 'clsx'
import {oswald} from "@/layouts/MainLayout/MainLayout";
import styles from './Info.module.scss'

interface IInfo {
    type?: string
    title?: string
    image: any
    value: number | string
}

const Info: FC<IInfo> = ({image, title, type, value}) => {
    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                {image}
                {title && <h5 className={styles.title}>{title}</h5>}
            </div>
            <div className={cn(oswald.className,styles.value)}>
                <h4>
                    {value}
                </h4>
                {type && <h5>{type}</h5>}
            </div>
        </div>
    );
}

export default Info;