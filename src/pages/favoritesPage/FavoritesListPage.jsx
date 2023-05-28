import React from 'react';
import { FavoriteListItem } from '../../components/main/favorites/FavoriteListItem';
import { Pagination } from '../../components/main/pagination/Pagination';
import { setSelectedPage } from '../../service/service';
import styles from '../../components/main/favorites/FavoritesList.module.scss';
import { getPagination } from '../../service/service';

export const FavoritesListPage = ({
    favorites,
    handleToggleFavorite,
    currentPage,
    setCurrentPage,
    vacanciesPerPage,
}) => {
    const { totalPages, currentVacancies } = getPagination(
        favorites,
        currentPage,
        vacanciesPerPage
    );

    const changeCurrentPage = (newPage) => setCurrentPage(newPage);
    const setPrevPage = () =>
        setSelectedPage(currentPage - 1, setCurrentPage, totalPages);
    const setNextPage = () =>
        setSelectedPage(currentPage + 1, setCurrentPage, totalPages);

    return (
        <div className={styles.favorites__list_parent}>
            <FavoriteListItem
                favorites={favorites}
                handleToggleFavorite={handleToggleFavorite}
                currentVacancies={currentVacancies}
            />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                changeCurrentPage={changeCurrentPage}
                setPrevPage={setPrevPage}
                setNextPage={setNextPage}
            />
        </div>
    );
};
