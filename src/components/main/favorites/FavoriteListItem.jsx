import React from 'react';
import { FavoriteItemCard } from './FavoriteItemCard';
import { FavoriteItemStar } from './FavoriteItemStar';
import styles from './FavoritesList.module.scss';

export const FavoriteListItem = ({ favorites, handleToggleFavorite, fav }) => {
    return (
        <div className={styles.favorites__list}>
            {fav.map((vacancy) => {
                const {
                    id,
                    profession,
                    firm_name,
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
                            firm_name={firm_name}
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
                            handleToggleFavorite={handleToggleFavorite}
                        />
                    </div>
                );
            })}
        </div>
    );
};
