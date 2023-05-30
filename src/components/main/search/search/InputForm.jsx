import React from 'react';
import { InputSearch } from './InputSearch';
import { ButtonSearch } from './ButtonSearch';
import styles from './Search.module.scss';
import searchPic from '../../../../icons/search.png'

export const InputForm = ({
    searchValue,
    setSearchValue,
    salaryFrom,
    salaryTo,
    industryValue,
    getVacancies,
    setLoading,
    setVacancies,
}) => {
    return (
        <form
            className={styles.search__panel}
            onSubmit={(event) => event.preventDefault()}
        >
            <img src={searchPic} alt='search' />
            <InputSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <ButtonSearch
                searchValue={searchValue}
                getVacancies={getVacancies}
                setLoading={setLoading}
                setVacancies={setVacancies}
                salaryFrom={salaryFrom}
                salaryTo={salaryTo}
                industryValue={industryValue}
            />
        </form>
    );
};
