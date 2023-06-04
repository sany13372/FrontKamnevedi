import {FC, forwardRef} from 'react';
import cn from "clsx";
import styles from "./TextAreaComp.module.scss";
import {IField} from "@/types/all.interface";

const TextAreaComp = forwardRef<HTMLAreaElement, IField>(
    ({placeholder, error, type = 'text', style, ...rest}) => {
        return (
            <>
                {/*//@ts-ignore*/}
                <textarea placeholder={placeholder} className={cn(styles.textArea)}   {...rest} />
                {error && <div className={styles.error}>{error.message}</div>}
            </>
        );
    }
)

export default TextAreaComp;