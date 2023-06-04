import {FC, useState} from 'react';
import Whatsapp from '@/assets/images/Whatsapp.svg'
import Telegram from '@/assets/images/Telegram.svg'
import Telephone from '@/assets/images/Phone.svg'
import styles from './ButtonsContact.module.scss'
import cn from 'clsx'

const ButtonsContact: FC = () => {
    const [activeType, setActiveType] = useState<'whatsapp' | 'telegram' | 'phone'>('whatsapp')
    return (
        <div className={styles.buttons}>
            <div
                className={cn({
                    [styles.active]: activeType === 'whatsapp'
                })}
                onClick={() => setActiveType('whatsapp')}
            >
                <Whatsapp fill={activeType === 'whatsapp' ? 'black' : 'orange'}/>
                {activeType === 'whatsapp' && <h4>WhatsApp</h4>}
            </div>
            <div className={cn({
                [styles.active]: activeType === 'telegram'
            })}
                 onClick={() => setActiveType('telegram')}
            >
                <Telegram fill={activeType === 'telegram' ? 'black' : 'orange'}/>
                {activeType === 'telegram' && <h4>telegram</h4>}
            </div>
            <div className={cn({
                [styles.active]: activeType === 'phone'
            })}
                 onClick={() => setActiveType('phone')}
            >
                <Telephone fill={activeType === 'phone' ? 'black' : 'orange'}/>
                {activeType === 'phone' && <h4>phone</h4>}
            </div>
        </div>
    );
}

export default ButtonsContact;