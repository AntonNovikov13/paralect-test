import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = ({ favorites }) => {
    const [favoritesButton, setFavoritesButton] = useState('');
    const [searchButton, setSearchButton] = useState('');

    const toggleColorHeader = (paramsPath) => {
        setFavoritesButton(paramsPath === 'favorites' ? '#5E96FC' : '');
        setSearchButton(paramsPath === '/' ? '#5E96FC' : '');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__child}>
                <img
                    src={require('../../icons/union.png')}
                    alt='logo'
                    className={styles.header__child_logo}
                />
                <p className={styles.header__child_company}>Jobored</p>
                <Link
                    to='/'
                    className={styles.header__child_search}
                    style={{ color: searchButton }}
                    onClick={() => toggleColorHeader('/')}
                >
                    Поиск Вакансий
                </Link>
                <Link
                    to={favorites.length !== 0 ? '/favorites' : '*'}
                    className={styles.header__child_favorites}
                    style={{ color: favoritesButton }}
                    onClick={() => toggleColorHeader('favorites')}
                >
                    Избранное
                </Link>
            </div>
        </header>
    );
};
