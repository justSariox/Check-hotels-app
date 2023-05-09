import React, {FC, useState} from 'react';
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import style from './LoginPage.module.css'

type LoginPagePropsType = {

}


export const LoginPage: FC<LoginPagePropsType> = ({}) => {

    return (
        <div className={style.loginPage}>
        <LoginForm />
        </div>
    );
};

