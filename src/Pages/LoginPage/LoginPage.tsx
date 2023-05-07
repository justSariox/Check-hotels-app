import React, {useState} from 'react';
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import style from './LoginPage.module.css'

export const LoginPage = () => {
    return (
        <div className={style.loginPage}>
        <LoginForm/>
        </div>
    );
};

