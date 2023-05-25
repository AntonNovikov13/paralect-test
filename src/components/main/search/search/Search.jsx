import React, { useState } from 'react';
import { VacancyList } from '../vacancyList/VacancyList';
import { Loader } from './loader/Loader';
import { Pagination } from '../../pagination/Pagination';
import styles from './Search.module.scss';
import { InputForm } from './InputForm';
export const Search = ({
    searchValue,
    setSearchValue,
    vacancies,
    getVacancies,
    favorites,
    openLoader,
    handleToggleFavorite,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [vacanciesPerPage] = useState(4);

    const totalPages = Math.ceil(vacancies.length / vacanciesPerPage);
    const firstVacancyIndex = (currentPage - 1) * vacanciesPerPage;
    const lastVacancyIndex = firstVacancyIndex + vacanciesPerPage;
    const currentVacancies = vacancies.slice(
        firstVacancyIndex,
        lastVacancyIndex
    );

    const changeCurrentPage = (newPage) => setCurrentPage(newPage);

    const setSelectedPage = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages) {
            setCurrentPage(selectedPage);
        }
    };

    const setPrevPage = () => setSelectedPage(currentPage - 1);

    const setNextPage = () => setSelectedPage(currentPage + 1);

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
                            changeCurrentPage={changeCurrentPage}
                            currentPage={currentPage}
                            setPrevPage={setPrevPage}
                            setNextPage={setNextPage}
                        />
                    </>
                )}
            </div>
        </>
    );
};
