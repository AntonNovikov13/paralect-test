import React from 'react';
import styles from './Search.module.scss';

export const InputSearch = ({ setSearchValue, searchValue }) => {
    return (
        <>
            <input
                className={styles.search__panel_input}
                type='text'
                placeholder='Введите название вакансии'
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
                data-elem="search-input"
                required
            />
        </>
    );
};
