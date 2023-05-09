import React, {FC} from 'react';
import styles from './HotelCard.module.css'
import IMAGE from  '../../../../assets/HomeImg.png'
import {IconButton, Rating} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {priceConverter} from "../../../../utils/priceConverter";
import {declineNumber} from "../../../../utils/formatterDate";


export type DataTypes ={
    key:number
    title:string
    price:number
    raiting:number
    days: string
}
export const HotelCard:FC<DataTypes> = ({title,price,key,raiting, days}) => {
   const correctPrice = priceConverter(price)
    return (
        <div className={styles.card} key={key}>
            {/*image*/}
            <img className={styles.imageBlock} src={IMAGE}/>
            {/*description block*/}
            <div className={styles.descriptionBlock}>
                <h3 className={styles.hotelTitle}>{title}</h3>
                <div className={styles.hotelsDates}>
                    <span className={styles.date}> 7 июля 2020</span>
                    <span className={styles.days}> - {days} { declineNumber(`${days}`, 'день')}</span>
                    <div> <Rating name="read-only" value={raiting} readOnly /></div>
                </div>
            </div>
            {/*price section*/}
            <div className={styles.priceBlock} >
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
                <div>
                    <span className={styles.priceTitle}>Price:</span>
                    <span className={styles.priceValue}>{correctPrice} Р</span>
                </div>
            </div>
        </div>
    );
};



