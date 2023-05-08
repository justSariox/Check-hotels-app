import React, {useState} from 'react';
import {useForm} from "./hooks/UseForm";
import {validationInfo} from "./utils/validationInfo";

import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {Main} from "./Pages/Main/Main";



const App = () => {




    return (
        <div >

            {/*<LoginPage/>*/}
            <Main/>
        </div>
    );
};

export default App;