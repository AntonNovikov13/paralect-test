import React from 'react';
import styles from './Filter.module.scss';

export const InputSalaryTo = ({ salaryTo, setSalaryTo }) => {
    return (
        <>
            <input
                type='number'
                placeholder='До'
                className={styles.filter__inputs}
                value={salaryTo}
                onChange={(event) => setSalaryTo(event.target.value)}
                data-elem="salary-to-input"
                required
            />
        </>
    );
};
