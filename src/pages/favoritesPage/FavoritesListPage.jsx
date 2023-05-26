import React from 'react';
import { FavoriteListItem } from '../../components/main/favorites/FavoriteListItem';
import { Pagination } from '../../components/main/pagination/Pagination';

export const FavoritesListPage = ({
    favorites,
    handleToggleFavorite,
    setFavorites,
    totalPages,
    currentPage,
    changeCurrentPage,
    setPrevPage,
    setNextPage,
}) => {
    return (
        <>
            <FavoriteListItem
                setFavorites={setFavorites}
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
    );
};
