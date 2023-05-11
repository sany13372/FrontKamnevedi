import {Dispatch, FC, SetStateAction} from 'react';
import TrashImg from '@/components/icons/Trash.svg'
import {useTemplate} from "@/providers/TemplateProvider";
import {filtersArray} from "@/utils/filtersArray";

interface IButtonDeleted {
    selectedTemplates: string[]
    setSelectedTemplates: Dispatch<SetStateAction<string[]>>
    setAllChecked: Dispatch<SetStateAction<boolean>>
}

const ButtonDeleted: FC<IButtonDeleted> = ({setSelectedTemplates, selectedTemplates, setAllChecked}) => {
    const {dataTemplates, setDataTemplates} = useTemplate()
    const deletedTemplates = () => {
        setDataTemplates(filtersArray(dataTemplates, selectedTemplates))
        setSelectedTemplates([])
        setAllChecked(false)
    }

    return (
        <div
            onClick={() => deletedTemplates()}
            className={'flex px-2 h-[40px] gap-2 cursor-pointer text-primary font-semibold justify-center items-center border-[1.5px] solid border-primary'}>
            <TrashImg className={'fill-blue-bg'}/>
            <div>Delete {selectedTemplates.length} selected</div>
        </div>
    );
}

export default ButtonDeleted;