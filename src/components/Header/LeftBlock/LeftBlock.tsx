import {FC} from 'react';
import styles from './LeftBlock.module.scss'
import HeaderAction from "@/components/UI/HeaderAction/HeaderAction";

const LeftBlock: FC = () => {
    return (
        <div className={styles.block}>
            <nav>
                <span className={styles.navicon}></span>
                <h4>меню</h4>
            </nav>
            <HeaderAction>
                RU
            </HeaderAction>
        </div>
    );
}

export default LeftBlock;