import {FC} from 'react';
import styles from './BlockTitle.module.scss'
import cn from 'clsx'
import {Link} from "react-scroll";

const BlockTitle: FC<{ offsetY: number }> = ({offsetY}) => {
    return (
        <div className={cn(styles.block, {
            [styles.active]: offsetY > 72
        })}>
            <h1>Уникальные минералы, окаменелости, метеориты и изделия из камня</h1>
            <div>
                <Link to={'postyp'} smooth={true} duration={100}>
                    Перейти в каталог
                </Link>
            </div>
        </div>
    );
}

export default BlockTitle;