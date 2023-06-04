import {FC} from 'react';
import styles from './LeftBlock.module.scss'
import HeaderAction from "@/components/UI/HeaderAction/HeaderAction";

const LeftBlock: FC<{ showActions: boolean }> = ({showActions}) => {
    return (
        <div className={styles.block}>
            <nav>
                <span className={styles.navicon}></span>
                {showActions && <h4>меню</h4>}
            </nav>
            {showActions &&
                <HeaderAction>
                    RU
                </HeaderAction>
            }
        </div>
    );
}

export default LeftBlock;