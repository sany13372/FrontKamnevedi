import {FC} from 'react';
import HeaderAction from "@/components/UI/HeaderAction/HeaderAction";
import TelephoneImg from '@/assets/images/PhoneHeader.svg'
import FavoriteImg from '@/assets/images/Favorite.svg'
import CardImg from '@/assets/images/CardImage.svg'
import styles from './RightBlock.module.scss'

const RightBlock: FC<{ showActions: boolean }> = ({showActions}) => {
    return (
        <div className={styles.block}>
            {showActions &&
                <HeaderAction>
                    <TelephoneImg fill={'#EFEFEF'}/>
                </HeaderAction>
            }
            <HeaderAction count={2}>
                <FavoriteImg fill={'#EFEFEF'}/>
            </HeaderAction>
            <HeaderAction count={1}>
                <CardImg fill={'#EFEFEF'}/>
            </HeaderAction>
        </div>
    );
}

export default RightBlock;