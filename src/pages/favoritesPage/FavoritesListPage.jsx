import React from 'react';
import { Pagination } from '../../components/main/pagination/Pagination';
import styles from './FavoritesList.module.scss';
import { getPagination } from '../../service/service';
import { VacancyList } from '../../components/main/search/vacancyList/VacancyList';

export const FavoritesListPage = ({
    favorites,
    setFavorites,
    currentPage,
    setCurrentPage,
    vacanciesPerPage,
}) => {
    const { totalPages, currentVacancies } = getPagination(
        favorites,
        currentPage,
        vacanciesPerPage
    );

    return (
        <div className={styles.favorites__list}>
            <VacancyList
                favorites={favorites}
                setFavorites={setFavorites}
                currentVacancies={currentVacancies}
            />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};
