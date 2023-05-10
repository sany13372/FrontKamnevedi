import {FC} from 'react';

interface IActions{
    title:string
    imag:any
}
const Actions: FC<IActions> = ({imag,title}) => {
    return (
        <div className={'flex gap-1'}>
            {imag}
            <h4 className={'text-primary'}>{title}</h4>
        </div>
    );
}

export default Actions;