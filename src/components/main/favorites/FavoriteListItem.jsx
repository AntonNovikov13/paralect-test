import React from 'react';
import { FavoriteItemCard } from './FavoriteItemCard';
import { FavoriteItemStar } from './FavoriteItemStar';
import styles from './FavoritesList.module.scss';

export const FavoriteListItem = ({
    favorites,
    handleToggleFavorite,
    setFavorites,
}) => {
    return (
        <div className={styles.favorites__list}>
            {favorites.map((vacancy) => {
                const {
                    id,
                    profession,
                    payment_from,
                    payment_to,
                    currency,
                    type_of_work,
                    town,
                } = vacancy;
                return (
                    <div key={id}>
                        <FavoriteItemCard
                            id={id}
                            profession={profession}
                            payment_from={payment_from}
                            payment_to={payment_to}
                            currency={currency}
                            type_of_work={type_of_work}
                            town={town}
                        />
                        <FavoriteItemStar
                            vacancy={vacancy}
                            id={id}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            handleToggleFavorite={handleToggleFavorite}
                        />
                    </div>
                );
            })}
        </div>
    );
};
