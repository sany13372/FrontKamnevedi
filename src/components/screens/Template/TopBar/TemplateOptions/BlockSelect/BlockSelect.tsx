import {FC, useMemo, useState} from 'react';
import cn from 'clsx'
import BlockOptions from './BlockOptions/BlockOptions'
import Arrow from '@/components/icons/ArrowBlue.svg'




const BlockSelect: FC = () => {
    const [showTypeTemplate, setShowTypeTemplate] = useState<boolean>(false)
    return (
        <div
            onClick={() => setShowTypeTemplate(!showTypeTemplate)}
            className={cn('relative', {
                //[styles.active]: showTypeTemplate
            })}>
            <div className={'flex cursor-pointer items-center gap-2'}>
                <div className={'text-header-text '}>
                    All templates
                </div>
                <Arrow className={'fill-arrow-pg cursor-pointer'}/>
            </div>
            {showTypeTemplate && <BlockOptions/>}
        </div>
    )
}

export default BlockSelect


