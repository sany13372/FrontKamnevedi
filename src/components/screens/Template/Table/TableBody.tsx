import {Dispatch, FC, SetStateAction} from 'react';
import {useTemplate} from "@/providers/TemplateProvider";
import TableItem from "@/components/screens/Template/Table/TableItem";

interface ITableBody {
    allChecked: boolean
    setSelectedTemplates: Dispatch<SetStateAction<string[]>>
    setEditItem: Dispatch<SetStateAction<string>>
    editItem: string
}

const TableBody: FC<ITableBody> = ({setSelectedTemplates, allChecked, setEditItem, editItem}) => {
    const {templates} = useTemplate()
    return (
        <div>
            {templates.map((template) => <TableItem key={template.id}
                                                    allChecked={allChecked}
                                                    setEditItem={setEditItem}
                                                    editItem={editItem}
                                                    setSelectedTemplates={setSelectedTemplates} template={template}/>)}
        </div>
    );
}

export default TableBody;