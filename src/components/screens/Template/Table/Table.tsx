import {Dispatch, FC, SetStateAction} from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'

interface ITable {
    setSelectedTemplates: Dispatch<SetStateAction<string[]>>
    setEditItem: Dispatch<SetStateAction<string>>
    setAllChecked: Dispatch<SetStateAction<boolean>>
    editItem: string
    allChecked:boolean
}

const Table: FC<ITable> = ({setSelectedTemplates, setEditItem, editItem,setAllChecked,allChecked}) => {
    return (
        <div className={'mt-5 px-10 pb-14'}>
            <TableHeader allChecked={allChecked} setAllChecked={setAllChecked}/>
            <TableBody allChecked={allChecked}
                       setSelectedTemplates={setSelectedTemplates} setEditItem={setEditItem} editItem={editItem}/>
        </div>
    );
}

export default Table;