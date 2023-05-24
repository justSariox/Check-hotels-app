
/*import react*/
import React, {MouseEvent, useEffect, useState} from 'react';
/*import styles modules*/
import styles from './Main.module.css';
/*import components*/
import {DatePicker} from "../../Components/Main/DatePicker/DatePicker";
import {Favorites} from "../../Components/Main/Favorites/Favorites";
import Common from "../../Components/Main/Common/Common.";
/*import types*/
import {MainDataTypes} from "../../types/store/StoreTypes";
/*import axios*/
import axios from "axios";
/*import icons*/
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {MainContextProvider} from "./MainContext";



export const Main = () => {

    const date = new Date().toISOString().split('T')[0]


    const navigate = useNavigate()


    const [searchResults, setSearchResults] = useState(Array<MainDataTypes>);
    const [location, setLocation] = useState('Москва');
    const [checkIn, setCheckIn] = useState(date); // заезд
    const [days, setDays] = useState<string>('1');
    const [checkOut, setCheckOut] = useState('');
    const [logout, setLogout] = useState('false');
    const [favoriteHotels, setFavoriteHotels] = useState<Array<MainDataTypes>>([]);


    // Обработка формы поиска отелей
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        try {
            const response = await axios.get(url);
            setSearchResults(response.data)

            // здесь вы можете обработать данные, полученные с сервера

        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        const newCheckIn = new Date(checkIn);
        newCheckIn.setDate(newCheckIn.getDate() + +days);
        setCheckOut(newCheckIn.toISOString().split('T')[0]);

        const fetchData = async () => {
            const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
            try {
                const response = await axios.get(url);
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [location,checkIn, checkOut, days, navigate]);




    useEffect(()=> {
        if(!localStorage.getItem('auth')){
            navigate('/login')
        }

    },[logout])



 const logoutHandler= (e:MouseEvent<HTMLButtonElement>) => {
     e.preventDefault()
     localStorage.removeItem('auth')
     setLogout('true')

 }


    return (
        <MainContextProvider >
        <section className={styles.main}>
            <div className={styles.headerSection}>
                <h2 className={styles.header}>Simple Hotel Check</h2>
                <button onClick={logoutHandler}>
                    <p className={styles.text}>Выйти</p>
                    <LogoutIcon/>
                </button>


            </div>

            <div className={ styles.container}>
                {/*left first block*/}
                <div className={styles.picker}>
                    <DatePicker
                        setSearchResults={setSearchResults}
                        checkIn={checkIn}
                        days={days}
                        location={location}
                        setCheckOut={setCheckOut}
                        setLocation={setLocation}
                        setCheckIn={setCheckIn}
                        setDays={setDays}
                        checkOut={checkOut}
                        handleSubmit={handleSubmit}
                    />
                </div>
                {/*left second block*/}
                <div className={styles.likes}>
                    <Favorites/>
                </div>
                {/*right main block*/}
                <div className={styles.board}>
                    <Common

                        days={days}
                        checkIn={checkIn}
                        location = {location}
                        searchResults={searchResults}

                        favoriteHotels={favoriteHotels}
                        setFavoriteHotels={setFavoriteHotels}/>
                </div>
            </div>
        </section>
        </MainContextProvider>
    );
};



/**/
/*

    useEffect(() => {
        const newCheckIn = new Date(checkIn);
        newCheckIn.setDate(newCheckIn.getDate() + +days);
        setCheckOut(newCheckIn.toISOString().split('T')[0]);
        const fetchData = async () => {
            const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
            try {
                const response = await axios.get(url);
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (isFormSubmitted) {
            fetchData();
            setIsFormSubmitted(false);
        }
    }, [handleSubmit,location, checkIn, checkOut]);
*/


/*    /!**!/    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        try {
            const response = await axios.get(url);
            setSearchResults(response.data)

            // здесь вы можете обработать данные, полученные с сервера

        } catch (error) {
            console.error(error);
        }
    };
    /!**!/
    useEffect(() => {
        const newCheckIn = new Date(checkIn);
        newCheckIn.setDate(newCheckIn.getDate() + +days);
        setCheckOut(newCheckIn.toISOString().split('T')[0]);

        const fetchData = async () => {
            const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
            try {
                const response = await axios.get(url);
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [handleSubmit]);*/

/**/



/*import React, {useEffect, useState} from 'react';

import styles from './Main.module.css';
import {DatePicker} from "../../Components/Main/DatePicker/DatePicker";
import {Favorites} from "../../Components/Main/Favorites/Favorites";
import Common from "../../Components/Main/Common/Common.";
import axios from "axios";
import {MainDataTypes} from "../../types/store/StoreTypes";

export const Main = () => {
    const [searchResults, setSearchResults] = useState<Array<MainDataTypes>>([]);
    const date = new Date().toISOString().split('T')[0]

    console.log(searchResults)

    const [location, setLocation] = useState('Москва');
    const [checkIn, setCheckIn] = useState(date); // заезд
    const [days, setDays] = useState<string>('1');
    const [checkOut, setCheckOut] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const handleSubmit = async () => {
        const newCheckIn = new Date(checkIn);
        newCheckIn.setDate(newCheckIn.getDate() + +days);
        setCheckOut(newCheckIn.toISOString().split('T')[0]);

        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        try {
            const response = await axios.get(url);
            setSearchResults(response.data);
            setIsInitialLoad(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!isInitialLoad) {
            handleSubmit();
        }
    }, [location, checkIn, checkOut]);

    return (
        <section className={styles.main}>
            <h2 className={styles.header}>Simple Hotel Check</h2>
            <div className={styles.container}>
                {/!*left first block*!/}
                <div className={styles.picker}>
                    <DatePicker
                        setSearchResults={setSearchResults}
                        checkIn={checkIn}
                        days={days}
                        location={location}
                        setCheckOut={setCheckOut}
                        setLocation={setLocation}
                        setCheckIn={setCheckIn}
                        setDays={setDays}
                        checkOut={checkOut}
                        handleSubmit={handleSubmit}
                    />
                </div>
                {/!*left second block*!/}
                <div className={styles.likes}>
                    <Favorites/>
                </div>
                {/!*right main block*!/}
                <div className={styles.board}>
                    <Common searchResults={searchResults} />
                </div>
            </div>
        </section>
    );
};*/
