import React from 'react';
import styles from './Filter.module.scss';

export const InputSalaryFrom = ({ salaryFrom, setSalaryFrom }) => {
    return (
        <>
            <input
                type='number'
                placeholder='От'
                className={`${styles.salary__radius_from} ${styles.filter__inputs}`}
                value={salaryFrom}
                onChange={(event) => setSalaryFrom(event.target.value)}
                data-elem="salary-from-input"
                required
            />
        </>
    );
};
