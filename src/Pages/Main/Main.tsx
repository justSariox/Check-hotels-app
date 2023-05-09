/*import react*/
import React, {useEffect, useState} from 'react';
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



export const Main = () => {
    const [searchResults, setSearchResults] = useState(Array<MainDataTypes>);
    const date = new Date().toISOString().split('T')[0]

    console.log(searchResults)


    const [location, setLocation] = useState('Москва');
    const [checkIn, setCheckIn] = useState(date); // заезд
    const [days, setDays] = useState<string>('1');
    const [checkOut, setCheckOut] = useState('');

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
    }, [location, checkIn, checkOut]);


    return (
        <section className={styles.main}>
            <h2 className={styles.header}>Simple Hotel Check</h2>
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
                        searchResults={searchResults} />
                </div>
            </div>
        </section>
    );
};
