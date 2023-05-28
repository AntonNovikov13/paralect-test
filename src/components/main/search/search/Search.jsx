import React from 'react';
import { VacancyList } from '../vacancyList/VacancyList';
import { Loader } from './loader/Loader';
import { Pagination } from '../../pagination/Pagination';
import styles from './Search.module.scss';
import { InputForm } from './InputForm';
import { setSelectedPage } from '../../../../service/service';
import { getPagination } from '../../../../service/service';

export const Search = ({
    searchValue,
    setSearchValue,
    vacancies,
    getVacancies,
    favorites,
    openLoader,
    handleToggleFavorite,
    currentPage,
    setCurrentPage,
    vacanciesPerPage,
}) => {
    const { totalPages, currentVacancies } = getPagination(
        vacancies,
        currentPage,
        vacanciesPerPage
    );

    const changeCurrentPage = (newPage) => setCurrentPage(newPage);

    const setPrevPage = () =>
        setSelectedPage(currentPage - 1, setCurrentPage, totalPages);

    const setNextPage = () =>
        setSelectedPage(currentPage + 1, setCurrentPage, totalPages);

    return (
        <>
            <div className={styles.searchANDlist}>
                <InputForm
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    getVacancies={getVacancies}
                />

                {openLoader ? (
                    <Loader />
                ) : (
                    <>
                        <VacancyList
                            currentVacancies={currentVacancies}
                            favorites={favorites}
                            handleToggleFavorite={handleToggleFavorite}
                        />
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            changeCurrentPage={changeCurrentPage}
                            setPrevPage={setPrevPage}
                            setNextPage={setNextPage}
                        />
                    </>
                )}
            </div>
        </>
    );
};
