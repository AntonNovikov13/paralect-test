import React from 'react';
import styles from './Filter.module.scss';

export const FilterApplyButton = ({
    salaryFrom,
    salaryTo,
    industryValue,
    getVacancies,
}) => {
    return (
        <>
            <button
                data-elem="search-button"
                className={styles.apply__button}
                onClick={() =>
                    getVacancies('', salaryFrom, salaryTo, industryValue)
                }
            >
                Применить
            </button>
        </>
    );
};
