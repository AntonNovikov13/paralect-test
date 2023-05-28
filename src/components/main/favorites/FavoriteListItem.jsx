import React from 'react';
import { FavoriteItemCard } from './FavoriteItemCard';
import { Star } from '../star/Star';
import styles from './FavoritesList.module.scss';

export const FavoriteListItem = ({
    favorites,
    handleToggleFavorite,
    currentVacancies,
}) => {
    return (
        <div>
            {currentVacancies.map((vacancy) => {
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
                        <div className={styles.favoritelist}>
                            <Star
                                id={id}
                                vacancy={vacancy}
                                favorites={favorites}
                                handleToggleFavorite={handleToggleFavorite}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
