import {FC, useMemo} from 'react';
import EditImg from '@/components/icons/Edit.svg'
import DeletedImg from '@/components/icons/Trash.svg'
import CopyImg from '@/components/icons/Copy.svg'

interface IEditItem{
    img:any
    title:string
    onClick:(e:any) => void
}
const EditBlock: FC = () => {
    const items:IEditItem[] = useMemo(() => ([
        {
            img:<EditImg/>,
            title:'Edit',
            onClick:() => console.log()
        }
    ]),[])
    return (
        <div>
            {}
        </div>
    );
}

export default EditBlock;