import React, {KeyboardEvent, ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import styles from './DatePicker.module.css';
import axios from "axios";
import {TInputHandler} from "../../../types/DatePicker/DatePicker";


export type MainProps = {
    setSearchResults: Dispatch<SetStateAction<never[]>>
}


export const DatePicker = (props: MainProps) => {
    const date = new Date().toISOString().split('T')[0]
    // console.log(date)

    const [location, setLocation] = useState('Москва');
    const [checkIn, setCheckIn] = useState<string>(date); // заезд
    const [days, setDays] = useState<string>('1');
    const [checkOut, setCheckOut] = useState('');

    useEffect(() => {
        const newCheckIn = new Date(checkIn);
        newCheckIn.setDate(newCheckIn.getDate() + +days);
        setCheckOut(newCheckIn.toISOString().split('T')[0]);
    }, [checkIn, days]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        try {
            const response = await axios.get(url);
            console.log(response.data);
            // здесь вы можете обработать данные, полученные с сервера
        } catch (error) {
            console.error(error);
        }
    };

    const inputHandlers: TInputHandler = {
        location: setLocation,
        checkIn: setCheckIn,
        days: setDays
    };



    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        const handler = inputHandlers[name];
        if (handler) {
            const isValidDate = name === 'checkIn' || name === 'checkOut'
                ? !isNaN(new Date(value).getTime())
                : true;
            if (isValidDate) {
                handler(value);
            }
        }
    }

    console.log(location, checkIn, checkOut)

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.first}>
                    <label htmlFor={'text'} className={`${styles.label} `}>
                        Локация
                    </label>
                    <input
                        name={'location'}
                        id={'text'}
                        className={`${styles.formInput}`}
                        type={'text'}
                        value={location}
                        onChange={onChangeInputHandler}
                    />
                </div>
                <div className={styles.second}>
                    <label htmlFor={'date'} className={styles.label}>
                        Дата заселения
                    </label>
                    <input
                        name={'checkIn'}
                        id={'date'}
                        className={styles.formInput}
                        type={'date'}
                        value={checkIn}
                        onChange={onChangeInputHandler}

                    />
                </div>
                <div className={styles.third}>
                    <label htmlFor={'number'} className={`${styles.label} ${styles.thirdLabel}`}>
                        Количество дней
                    </label>
                    <input
                        name={'days'}
                        id={'number'}
                        className={`${styles.formInput} ${styles.thirdInput}`}
                        type={'number'}
                        value={days}
                        onChange={onChangeInputHandler}
                    />
                </div>
                <button className={styles.button} type={'submit'}>
                    Найти
                </button>
            </form>
        </>
    );
};
