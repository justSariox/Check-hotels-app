import React, {ChangeEvent, FC, MouseEvent, useEffect, useState} from 'react';
import {emailValidator,passwordValidator} from "./RegexValidator/RegexValidator";
import style from './LoginForm.module.css'
import {useNavigate} from "react-router-dom";

type LoginFormPropsType = {

}

export const LoginFormRewrite: FC<LoginFormPropsType> = ({}) => {
    const navigate = useNavigate()

    const [input, setInput] = useState({email:'',password:''});

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    useEffect(()=> {
        if(localStorage.getItem('auth')) {
            navigate('/')
        }
    },[])

    const formSubmitter = (e:MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSuccessMessage('')
        if(!emailValidator(input.email)) {
            return setErrorMessage('Please enter valid email')
        }
        if(!passwordValidator(input.password)) {
            return setErrorMessage(
                'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and special charaters')
        }
       /* setSuccessMessage('Successfully validated')*/
        if(input.email!== 'admin@a.com' || input.password !== 'Password@1') {
            return setErrorMessage('Invalid email or password')
        }
        navigate('/')
        localStorage.setItem('auth','true')


    }

    return (
        <form className={style.loginForm} onSubmit={formSubmitter}>

            <label className={style.formLabel}>
                Логин
                <input
                    className={style.formInput}
                    type='text'
                    name='email'
                    onChange={handleChange}

                />
            </label>

            <label className={style.formLabel}>
                Пароль
                <input
                    className={style.formInput}
                    type='password'
                    name='password'

                    onChange={handleChange}

                />
            </label>
            <button
                type={'submit'}
                className={style.formButton}
            >
                Login
            </button>
            {errorMessage.length > 0
                && (<span className={style.errorMessage}>{errorMessage}</span>)}
            {successMessage.length > 0
                && (<span className={style.successMessage}>{successMessage}</span>)}

        </form>
    );
};

