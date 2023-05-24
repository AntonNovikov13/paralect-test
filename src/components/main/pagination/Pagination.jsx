import React from 'react';
import styles from './Pagination.module.scss';
import { PaginationButtonLeft } from './PaginationButtonLeft';
import { PaginationButtonNumbers } from './PaginationButtonNumbers';
import { PaginationButtonRight } from './PaginationButtonRight';

export const Pagination = ({
    totalPages,
    currentPage,
    changeCurrentPage,
    setPrevPage,
    setNextPage,
}) => {
    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination__list}>
                <PaginationButtonLeft setPrevPage={setPrevPage} />
                <PaginationButtonNumbers
                    totalPages={totalPages}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                />
                <PaginationButtonRight setNextPage={setNextPage} />
            </ul>
        </div>
    );
};
