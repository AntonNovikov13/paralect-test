import React, { useEffect, useState } from 'react';
import { FavoriteListItem } from '../../components/main/favorites/FavoriteListItem';

export const FavoritesListPage = ({ favorites, handleToggleFavorite }) => {
    const [fav, setFav] = useState([]);
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites'));

        setFav([savedFavorites]);
    }, []);

    return (
        <FavoriteListItem
            favorites={favorites}
            handleToggleFavorite={handleToggleFavorite}
            fav={fav}
        />
    );
};
