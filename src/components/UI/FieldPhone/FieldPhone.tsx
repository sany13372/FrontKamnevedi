import cn from 'clsx'
import {forwardRef} from 'react'
import {IField} from "@/types/all.interface";
import ReactInputMask from 'react-input-mask';
import styles from '../Field/Field.module.scss'

const FieldPhone = forwardRef<{placeholder:string,error:any},any> (
    ({placeholder, error, ...rest}, ref) => {
        return (
            <div className={cn(styles.field)}>
                <label>
                    <ReactInputMask ref={ref} placeholder={"+7 (___) ___-__-__"}  mask="+9(999)-999-99-99" {...rest}/>
                </label>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)
export default FieldPhone
