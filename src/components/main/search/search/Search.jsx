import React from 'react';
import { VacancyList } from '../vacancyList/VacancyList';
import { Loader } from './loader/Loader';
import { Pagination } from '../../pagination/Pagination';
import styles from './Search.module.scss';
import { InputForm } from './InputForm';
import { getPagination } from '../../../../service/service';

export const Search = ({
    searchValue,
    setSearchValue,
    salaryFrom,
    salaryTo,
    industryValue,
    vacancies,
    getVacancies,
    favorites,
    loading,
    setFavorites,
    currentPage,
    setCurrentPage,
    vacanciesPerPage,
    setLoading,
    setVacancies,
}) => {
    const { totalPages, currentVacancies } = getPagination(
        vacancies,
        currentPage,
        vacanciesPerPage
    );

    return (
        <div className={styles.searchANDlist}>
            <InputForm
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                getVacancies={getVacancies}
                setLoading={setLoading}
                setVacancies={setVacancies}
                salaryFrom={salaryFrom}
                salaryTo={salaryTo}
                industryValue={industryValue}
            />

            {loading ? (
                <Loader />
            ) : (
                <>
                    <VacancyList
                        currentVacancies={currentVacancies}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};
