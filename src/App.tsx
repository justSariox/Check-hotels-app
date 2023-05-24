import React, {useState} from 'react';
import {useForm} from "./hooks/UseForm";
import {validationInfo} from "./utils/validationInfo";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {Main} from "./Pages/Main/Main";



const App = () => {



    return (
        <div >
            <BrowserRouter>
                <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/'} element={<Main/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;