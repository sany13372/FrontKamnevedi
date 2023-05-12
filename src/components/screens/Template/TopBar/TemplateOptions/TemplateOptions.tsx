import {FC, memo} from 'react';
import BlockSelect from './BlockSelect/BlockSelect'

const TemplateOptions: FC = () => {
    return (
        <div className={'flex gap-12 items-center relative after:content-[\'*\'] after:left-[47%] after:absolute after:ml-0.5 after:w-[1px] after:h-[20px] after:bg-before-template'}>
            <div className={'text-xl'}>
                Templates
            </div>
            <BlockSelect/>
        </div>
    );
}

export default memo(TemplateOptions);