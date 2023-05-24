import React from 'react';
import styles from './Pagination.module.scss';

export const PaginationButtonRight = ({ setNextPage }) => {
    return (
        <li>
            <button
                onClick={setNextPage}
                className={styles.page__item_arrow_right}
            >
                {'>'}
            </button>
        </li>
    );
};
