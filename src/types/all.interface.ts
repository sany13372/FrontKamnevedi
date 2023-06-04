import {InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface IItem{
    id:string
    price:number
    img:any
    title:string
    age:string
    size:string
    weight:number
    location:string
}

export interface IFieldProps {
    placeholder: string
    error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IUserForm{
    name:string
    phone:string
    comment?:string
}