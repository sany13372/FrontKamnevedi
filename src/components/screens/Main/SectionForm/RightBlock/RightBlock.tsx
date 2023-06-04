import {FC} from 'react';
import styles from './RightBlock.module.scss'
import Field from "@/components/UI/Field/Field";
import {useForm} from "react-hook-form";
import {IUserForm} from "@/types/all.interface";
import TextArea from "@/components/UI/TextAreaComp/TextAreaComp";
import FieldPhone from "@/components/UI/FieldPhone/FieldPhone";
import ButtonsContact from './ButtonsContact/ButtonsContact'

const RightBlock: FC = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        getValues,
        control,
    } = useForm<IUserForm>({
        mode: 'onChange',
    })
    const onSubmit = (data: any) => {
    }

    return (
        <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
            <h4>Напишите нам и мы вам поможем</h4>
            <h5>Как к вам обращаться?</h5>
            <Field
                {...register('name', {
                    required: 'Имя обязательно',
                    validate: (value) => {
                        return (
                            value.match(/[а-я]/i) || "Можно использовать только буквы!"
                        );
                    },
                })}
                placeholder="Иван"
                error={errors.name}
            />
            <div>
                <h5>удобный способ связи</h5>
                <ButtonsContact/>
            </div>
            <FieldPhone
                {...register('phone', {
                    required: 'Телефон обязателен!'
                })}
                placeholder="Напишите свои пожелания"
                error={errors.phone}
            />
            <h5>Расскажите, что хотите найти</h5>
            <TextArea
                {...register('comment')}
                placeholder="Напишите свои пожелания"
                error={errors.comment}
            />
            <button onClick={(e) => e.preventDefault()}>
                Нужна помощь в поиске
                <span className="flare"></span>
            </button>
            <h6>Нажимая на кнопку, вы даете согласие на обработку своих <br/> персональных данных ﻿и соглашаетесь с
                Политикой конфиденциальности</h6>
        </form>
    );
}

export default RightBlock;