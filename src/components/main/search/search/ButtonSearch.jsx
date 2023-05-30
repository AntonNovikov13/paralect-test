import React from 'react';
import styles from './Search.module.scss';
import {
    base_url,
    clientId,
    clientSecret,
    xSecret,
} from '../../../../config/config';

export const ButtonSearch = ({
    getVacancies,
    searchValue,
    setLoading,
    setVacancies,
    salaryFrom,
    salaryTo,
    industryValue,
}) => {
    return (
        <>
            <button
                type='submit'
                className={styles.search__panel_btn}
                onClick={() =>
                    getVacancies(
                        searchValue,
                        salaryFrom,
                        salaryTo,
                        industryValue,
                        setLoading,
                        base_url,
                        clientId,
                        clientSecret,
                        xSecret,
                        setVacancies
                    )
                }
                data-elem="search-button"
            >
                Поиск
            </button>
        </>
    );
};
