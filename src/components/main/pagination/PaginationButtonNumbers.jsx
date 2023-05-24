import React from 'react';
import styles from './Pagination.module.scss';

export const PaginationButtonNumbers = ({
    totalPages,
    currentPage,
    changeCurrentPage,
}) => {
    return (
        <>
            {[...Array(totalPages).keys()]
                .slice(currentPage, currentPage + 3)
                .map((number) => (
                    <li key={number}>
                        <button
                            data-page={number}
                            onClick={() => changeCurrentPage(number)}
                            className={`${styles.page__item} 
                                    ${
                                        currentPage === number
                                            ? styles.activeClassName
                                            : ''
                                    }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
        </>
    );
};
