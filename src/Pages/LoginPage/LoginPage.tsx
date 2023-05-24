import React, {FC, useState} from 'react';
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import style from './LoginPage.module.css'
import {LoginFormRewrite} from "../../Components/LoginForm/LoginFormRewrite";

type LoginPagePropsType = {

}


export const LoginPage: FC<LoginPagePropsType> = ({}) => {

    return (
        <div className={style.loginPage}>
        {/*<LoginForm />*/}
            <LoginFormRewrite/>
        </div>
    );
};

