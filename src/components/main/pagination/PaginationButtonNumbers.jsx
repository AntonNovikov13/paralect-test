import React from 'react';
import styles from './Pagination.module.scss';

export const PaginationButtonNumbers = ({
    totalPages,
    currentPage,
    changeCurrentPage,
}) => {
    const visiblePages = [...Array(totalPages).keys()].slice(
        currentPage,
        currentPage + 3
    );

    return (
        <>
            {visiblePages.map((number) => (
                <li key={number}>
                    <button
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
