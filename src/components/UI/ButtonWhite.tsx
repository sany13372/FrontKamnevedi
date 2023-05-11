import {FC, PropsWithChildren} from 'react';

interface IButtonBlue extends PropsWithChildren {
    className: string
    onClick: any
}

const ButtonWhite: FC<IButtonBlue> = ({children, onClick, className}) => {
    return (
        <div className={`bg-white hover:bg-table-item text-blue-bg ${className} transition-all ease-in-out`}
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default ButtonWhite;