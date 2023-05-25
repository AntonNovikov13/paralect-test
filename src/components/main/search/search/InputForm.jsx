import React from 'react';
import { InputSearch } from './InputSearch';
import { ButtonSearch } from './ButtonSearch';
import styles from './Search.module.scss';

export const InputForm = ({
    searchValue,
    setSearchValue,
    getVacancies,
}) => {
    return (
        <form
            className={styles.search__panel}
            onSubmit={(event) => event.preventDefault()}
        >
            <img src={require('../../../../icons/search.png')} alt='search' />
            <InputSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <ButtonSearch
                searchValue={searchValue}
                getVacancies={getVacancies}
            />
        </form>
    );
};
