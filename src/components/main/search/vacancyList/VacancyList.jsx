import React from 'react';
import { VacancyListStar } from './VacancyListStar';
import { VacancyListCard } from './VacancyListCard';
import { EmptyPage } from '../../../../pages/emptyPage/EmptyPage';

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
                        firm_name,
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
                                firm_name={firm_name}
                                payment_from={payment_from}
                                payment_to={payment_to}
                                currency={currency}
                                type_of_work={type_of_work}
                                town={town}
                            />
                            <VacancyListStar
                                favorites={favorites}
                                handleToggleFavorite={handleToggleFavorite}
                                id={id}
                                vacancy={vacancy}
                            />
                        </div>
                    );
                })
            ) : (
                <EmptyPage />
            )}
        </>
    );
};
