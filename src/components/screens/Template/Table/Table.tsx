import {Dispatch, FC, SetStateAction, useState} from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {ITemplate} from "@/types/all.interface";

const Table: FC<{ setSelectedTemplates: Dispatch<SetStateAction<ITemplate[]>> }> = ({setSelectedTemplates}) => {
    const [allChecked, setAllChecked] = useState<boolean>(false)
    return (
        <div className={'mt-5 px-10 pb-14'}>
            <TableHeader allChecked={allChecked} setAllChecked={setAllChecked}/>
            <TableBody allChecked={allChecked} setAllChecked={setAllChecked}
                       setSelectedTemplates={setSelectedTemplates}/>
        </div>
    );
}

export default Table;