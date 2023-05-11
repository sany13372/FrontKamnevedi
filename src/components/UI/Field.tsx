import {Dispatch, FC, SetStateAction} from 'react';

interface IField{
    value:string
    setValue:Dispatch<SetStateAction<string>>
    className:string
    placeholder:string
    handleKey?:any
    type?:string
}

const Field:FC<IField> = ({setValue,value,className,placeholder,type = 'text',handleKey}) => {
 return (
     <input
         placeholder={placeholder}
         value={value}
         onKeyDown={ (e:any) => handleKey && handleKey(e)}
         onChange={(e) => setValue(e.target.value)}
         type={type}
         className={`${className} text-gray-500 .placeholder-gray-900`}/>
 );
 }

export default Field;