import {FC} from 'react';
import styles from './BlockTitle.module.scss'
import cn from 'clsx'
import {Link} from "react-scroll";

const BlockTitle: FC<{ offsetY: number }> = ({offsetY}) => {
    console.log('child')
    return (
        <div className={cn(styles.block, {
            [styles.active]: offsetY > 72
        })}>
            <h1>Уникальные минералы, окаменелости, метеориты и изделия из камня</h1>
            <Link to={'postyp'} smooth={true} duration={100}>
                Перейти в каталог
            </Link>
        </div>
    );
}

export default BlockTitle;