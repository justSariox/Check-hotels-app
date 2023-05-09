import React, {useState} from 'react';
import {useForm} from "./hooks/UseForm";
import {validationInfo} from "./utils/validationInfo";
import {Routes, Route, Navigate} from 'react-router-dom'
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {Main} from "./Pages/Main/Main";



const App = () => {



    return (
        <div >

            <Routes>
                {/*<Route path={'/'} element={<Navigate to={isAuth ? '/hotels' : '/login'}/>}/>*/}
                <Route path={'/hotels'} element={<Main/>}/>
                <Route path={'/login'} element={<LoginPage />}/>
            </Routes>
        </div>
    );
};

export default App;