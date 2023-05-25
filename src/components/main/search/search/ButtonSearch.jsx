import React from 'react';
import styles from './Search.module.scss';

export const ButtonSearch = ({ getVacancies, searchValue }) => {
    return (
        <>
            <button
                type='submit'
                className={styles.search__panel_btn}
                onClick={() => getVacancies(searchValue)}
                data-elem="search-button"
            >
                Поиск
            </button>
        </>
    );
};
