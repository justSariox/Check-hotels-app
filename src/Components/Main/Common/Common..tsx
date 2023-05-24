import React, {Dispatch, FC, SetStateAction,} from 'react';
import styles from './Common.module.css';
import { HotelCard } from './HotelCard/HotelCard';
import { MainDataTypes } from '../../../types/store/StoreTypes';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { DateReplacer } from '../../../utils/dateReplacer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slider } from './Carousel/Carousel';
import {useMainContext} from "../../../Pages/Main/MainContext";

type MainProps = {
    searchResults: Array<MainDataTypes>;
    location: string;
    checkIn: string;
    days: string;
    setFavoriteHotels:Dispatch<SetStateAction<Array<MainDataTypes>>>
    favoriteHotels:Array<MainDataTypes>
};


export const Common: FC<MainProps> = ({
    searchResults,
    checkIn,
    location,
    days,
    setFavoriteHotels,
    favoriteHotels
}) => {
    let correctDate = DateReplacer(checkIn);

    return (
        <section className={styles.container}>
            <div className={styles.headerSection}>
                <div className={styles.location}>
                    <h2 className={styles.header}>Отели</h2>
                    <ArrowForwardIosIcon color={'disabled'} />
                    <h2 className={styles.header}>{location}</h2>
                </div>
                <div className={styles.dateSection}></div>

                <h2 className={styles.date}>{correctDate}</h2>
            </div>
            <Slider />
            <PerfectScrollbar
                className={styles.scroll}
                style={{ maxHeight: '400px' }}
            >
                {searchResults.map((el) => (
                    <HotelCard
                        key={el.hotelId}
                        title={el.hotelName}
                        price={el.priceAvg}
                        raiting={el.stars}
                       /* addToFavorites={addToFavorites(el)}*/
                        days={days}
                        setFavoriteHotels={setFavoriteHotels}
                        favoriteHotels={favoriteHotels}
                    />
                ))}
            </PerfectScrollbar>
        </section>
    );
};

export default Common;
