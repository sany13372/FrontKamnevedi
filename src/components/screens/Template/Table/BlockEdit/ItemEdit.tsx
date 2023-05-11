import {FC} from 'react';
import {IOptions} from "@/components/screens/Template/TopBar/TemplateOptions/BlockSelect/BlockOptions/BlockOptions";

const ItemEdit: FC<{ item: IOptions }> = ({item}) => {
    return (
        <div className={'py-2 px-6 flex cursor-pointer items-center gap-2'}
             onClick={item.click}
        >
            {item.icon}
            <div>
                {item.title}
            </div>
        </div>
    );
}

export default ItemEdit;