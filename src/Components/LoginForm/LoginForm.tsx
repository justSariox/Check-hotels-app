import React, {useState} from 'react';
import {useForm} from "../../hooks/UseForm";
import {validationInfo} from "../../utils/validationInfo";
import style from './LoginForm.module.css'


export const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const submitForm = () => {
        setIsSubmitted(true)
    }

    const { handleChange, handleSubmit, handleBlur, values, errors} = useForm(submitForm, validationInfo)

    return (
        <form className={style.loginForm} onSubmit={handleSubmit}>
            <label className={style.formLabel}>
                Логин
                <input
                    className={`${style.formInput} ${errors.email && style.error}` }
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {errors.email && <div className={style.errorMessage}>{errors.email}</div>}
            <label className={style.formLabel}>
                Пароль
                <input
                    className={`${style.formInput} ${errors.password && style.error}`}
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {errors.password && <div className={style.errorMessage}>{errors.password}</div>}
            <button
                type={'submit'}
                className={style.formButton}
            >
                Login
            </button>
        </form>
    );
};

