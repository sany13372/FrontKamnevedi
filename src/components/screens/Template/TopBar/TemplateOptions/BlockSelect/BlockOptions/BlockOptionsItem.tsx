import {FC, useState} from 'react';
import {IOptions} from './BlockOptions'
import Checkbox from '@/components/UI/CheckBox'

const BlockOptionsItem: FC<{ item: IOptions }> = ({item}) => {
    const [isCheck, setIsCheck] = useState<boolean>(false)
    return (
        <div className={'py-2 px-6 flex items-center gap-2'}>
            <div className={'pb-1'}>
                <Checkbox
                    width={'w-[0.8rem]'}
                    height={'h-[0.8rem]'}
                    isCheked={isCheck}
                    onClick={(e) => {
                        setIsCheck(!isCheck)
                    }}/>
            </div>
            {item.icon}
            <div>
                {item.title}
            </div>
        </div>
    );
}

export default BlockOptionsItem;