import React from 'react';
import styles from './Pagination.module.scss';
import { PaginationButtonLeft } from './PaginationButtonLeft';
import { PaginationButtonNumbers } from './PaginationButtonNumbers';
import { PaginationButtonRight } from './PaginationButtonRight';
import { setSelectedPage } from '../../../service/service';

export const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const changeCurrentPage = (newPage) => setCurrentPage(newPage);

    const setPrevPage = () => setSelectedPage(currentPage - 1, setCurrentPage, totalPages);

    const setNextPage = () => setSelectedPage(currentPage + 1, setCurrentPage, totalPages);

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
