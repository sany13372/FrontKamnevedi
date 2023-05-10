import {Dispatch, FC, SetStateAction} from 'react';
import {ITemplate} from "@/types/all.interface";
import {useTemplate} from "@/providers/TemplateProvider";
import TableItem from "@/components/screens/Template/Table/TableItem";

interface ITableBody {
    allChecked: boolean
    setAllChecked: Dispatch<SetStateAction<boolean>>
    setSelectedTemplates: Dispatch<SetStateAction<ITemplate[]>>
}

const TableBody: FC<ITableBody> = ({setSelectedTemplates, setAllChecked, allChecked}) => {
    const {templates} = useTemplate()
    return (
        <div>
            {templates.map((template) => <TableItem key={template.id} setAllChecked={setAllChecked}
                                                    allChecked={allChecked}
                                                    setSelectedTemplates={setSelectedTemplates} template={template}/>)}
        </div>
    );
}

export default TableBody;