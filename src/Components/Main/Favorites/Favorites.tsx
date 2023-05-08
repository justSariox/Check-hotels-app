import React from 'react';
import styles from './Favorites.module.css'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export const Favorites = () => {
    return (
        <section className={styles.favorites}>
            <h2 className={styles.header}>Избранное</h2>
            <div className={styles.filterSection}>
                <span className={styles.filter}>
                    Рейтинг
                    <UnfoldMoreIcon/>
                </span>
                <span className={styles.filter}>Цена <UnfoldMoreIcon/></span>
            </div>
        </section>
    );
};

