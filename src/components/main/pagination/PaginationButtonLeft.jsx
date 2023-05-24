import React from 'react';
import styles from './Pagination.module.scss';

export const PaginationButtonLeft = ({ setPrevPage }) => {
    return (
        <li>
            <button
                onClick={setPrevPage}
                className={styles.page__item_arrow_left}
            >
                {'<'}
            </button>
        </li>
    );
};
