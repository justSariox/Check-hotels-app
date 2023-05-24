import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
/*import react*/
/*import styles modules*/

import styles from './DatePicker.module.css';
import {IDatePickerProps, TInputHandler} from "../../../types/DatePicker/DatePicker";

export const DatePicker: FC<IDatePickerProps> = ({
                                                     setSearchResults,
                                                     checkIn,
                                                     days,
                                                     location,
                                                     setLocation,
                                                     setCheckIn,
                                                     setDays,
                                                     checkOut,
                                                     handleSubmit,
                                                 }) => {


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



/*    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
        try {
            const response = await axios.get(url);
            setSearchResults(response.data)

            // здесь вы можете обработать данные, полученные с сервера

        } catch (error) {
            console.error(error);
        }
    };*/
