import React from 'react';
import { VacancyListCard } from './VacancyListCard';
import { EmptyPage } from '../../../../pages/emptyPage/EmptyPage';
import { Star } from '../../star/Star';
import styles from './VacancyList.module.scss';

export const VacancyList = ({
    currentVacancies,
    favorites,
    handleToggleFavorite,
}) => {
    return (
        <>
            {currentVacancies.length !== 0 ? (
                currentVacancies.map((vacancy) => {
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
                            <VacancyListCard
                                id={id}
                                profession={profession}
                                payment_from={payment_from}
                                payment_to={payment_to}
                                currency={currency}
                                type_of_work={type_of_work}
                                town={town}
                            />
                            <div className={styles.vacancylist}>
                                <Star
                                    id={id}
                                    vacancy={vacancy}
                                    favorites={favorites}
                                    handleToggleFavorite={handleToggleFavorite}
                                />
                            </div>
                        </div>
                    );
                })
            ) : (
                <EmptyPage />
            )}
        </>
    );
};
