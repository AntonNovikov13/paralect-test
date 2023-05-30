import React from 'react';
import styles from './Filter.module.scss';
import { base_url, clientId, clientSecret, xSecret } from '../../../../config/config';

export const FilterApplyButton = ({
    salaryFrom,
    salaryTo,
    industryValue,
    getVacancies,
    setLoading,
    setVacancies,
}) => {
    
    return (
        <>
            <button
                data-elem="search-button"
                className={styles.apply__button}
                onClick={() =>
                    getVacancies(
                        '',
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
            >
                Применить
            </button>
        </>
    );
};
