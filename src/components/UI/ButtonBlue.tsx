import {FC, PropsWithChildren} from 'react';

interface IButtonBlue extends PropsWithChildren {
    className: string
    onClick: any
}

const ButtonBlue: FC<IButtonBlue> = ({children, onClick, className}) => {
    return (
        <div className={`bg-blue-bg hover:bg-hover-blue ${className} transition-all ease-in-out`}
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default ButtonBlue;