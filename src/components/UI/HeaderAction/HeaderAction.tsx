import {FC, PropsWithChildren} from 'react';
import styles from './HeaderAction.module.scss'

interface IHeaderAction extends PropsWithChildren {
    count?: number
}

const HeaderAction: FC<IHeaderAction> = ({count, children}) => {
    return (
        <div className={styles.action}>
            {count && <div>{count}</div>}
            {children}
        </div>
    );
}

export default HeaderAction;