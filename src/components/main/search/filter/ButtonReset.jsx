import React from 'react';
import styles from './Filter.module.scss';

export const ButtonReset = ({ inputsClearHandler }) => {
    return (
        <button
            className={styles.filter__header_btn}
            onClick={inputsClearHandler}
        >
            Сбросить все X
        </button>
    );
};
