import {Dispatch, FC, SetStateAction, useCallback, useMemo, useRef} from 'react';
import {IOptions} from "@/components/screens/Template/TopBar/TemplateOptions/BlockSelect/BlockOptions/BlockOptions";
import ItemEdit from "@/components/screens/Template/Table/BlockEdit/ItemEdit";
import {useOnClickOutside} from "@/hooks/useOnClickOutside";
import {ITemplate} from "@/types/all.interface";
import {getRandomNumber} from "@/utils/randomNumber";
import EditImg from "@/components/icons/Edit.svg";
import DeletedImg from "@/components/icons/Trash.svg";
import CopyImg from "@/components/icons/Copy.svg";
import {useTemplate} from "@/providers/TemplateProvider";

interface IBlockEdit {
    template:ITemplate
    classNameBlock: string
    setEditItem: Dispatch<SetStateAction<string>>
}

const BlockEdit: FC<IBlockEdit> = ({classNameBlock, template, setEditItem}) => {
    const ref = useRef(null)
    const elem = useOnClickOutside(ref, () => setEditItem(''))
    const {setSelectTemplate, setModalType, setDataTemplates, dataTemplates} = useTemplate()

    const editTemplate = useCallback(() => {
        setModalType('edit')
        setSelectTemplate(template)
    }, [])

    const deletedTemplate = () => {
        const newData = dataTemplates.filter((temp) => temp.id !== template.id)
        setDataTemplates(newData)
    }

    const copyTemplate = useCallback(() => {
            let newData: ITemplate = {
                type: template.type,
                name: `copy ${template.name}`,
                text: `copy ${template.text}`,
                id: getRandomNumber(10, 1000)
            }
            setDataTemplates([newData, ...dataTemplates])
        }
        , [template])

    const options: IOptions[] = useMemo(() => ([
        {
            icon: <EditImg/>,
            title: 'Edit',
            click: () => editTemplate()
        },
        {
            icon: <DeletedImg className={'fill-black'}/>,
            title: 'Delete',
            click: () => deletedTemplate()
        },
        {
            icon: <CopyImg/>,
            title: 'Clone',
            click: () => copyTemplate()
        },
    ]), [])

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