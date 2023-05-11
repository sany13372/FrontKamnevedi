import {Dispatch, FC, SetStateAction, useRef} from 'react';
import {IOptions} from "@/components/screens/Template/TopBar/TemplateOptions/BlockSelect/BlockOptions/BlockOptions";
import ItemEdit from "@/components/screens/Template/Table/BlockEdit/ItemEdit";
import {useOnClickOutside} from "@/hooks/useOnClickOutside";

interface IBlockEdit {
    options: IOptions[],
    classNameBlock: string
    setEditItem: Dispatch<SetStateAction<string>>
}

const BlockEdit: FC<IBlockEdit> = ({classNameBlock, options, setEditItem}) => {
    const ref = useRef(null)
    const elem = useOnClickOutside(ref, () => setEditItem(''))

    return (
        <div
            ref={ref}
            className={`absolute z-[1] ${classNameBlock} flex flex-col bg-white py-0.5 drop-shadow-medium`}
            onClick={(e) => e.stopPropagation()}
        >
            {options.map((item) => <ItemEdit key={item.title} item={item}/>)}
        </div>
    );
}

export default BlockEdit;