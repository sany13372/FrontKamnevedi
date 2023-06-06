import cn from 'clsx'
import {forwardRef} from 'react'
import {IField} from "@/types/all.interface";
import ReactInputMask from 'react-input-mask';
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
    ({placeholder, error, type = 'text', style, ...rest}, ref) => {
        return (
            <div className={cn(styles.field)} style={style}>
                <label>
                    {/*<ReactInputMask mask="99/99/_3_4_4" {...rest}>*/}
                    {/*    /!*{(inputProps) => <input ref={ref} type={type} type="tel"/> }*!/*/}
                    {/*</ReactInputMask>*/}
                    <input ref={ref} className={cn({
                        [styles.active]:error
                    })} type={type} placeholder={placeholder} {...rest} />
                </label>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)
export default Field
