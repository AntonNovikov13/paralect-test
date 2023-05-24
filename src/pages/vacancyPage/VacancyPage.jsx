import React from 'react';
import { useLocation } from 'react-router-dom';
import { VacancyPageDescription } from './VacancyPageDescription';
import { VacancyPageProfession } from './VacancyPageProfession';
import { VacancyPageSalaryWork } from './VacancyPageSalaryWork';
import { VacancyPageLocationTown } from './VacancyPageLocationTown';
import styles from './VacancyPage.module.scss';

export const VacancyPage = ({ vacancies, favorites, handleToggleFavorite }) => {
    const location = useLocation();
    const { id } = location.state;
    const filteredVacancyItem = vacancies.filter((vacId) => vacId.id === id);

    return (
        <div className={styles.vacancy}>
            <div>
                {filteredVacancyItem.map((vacancy) => {
                    const {
                        id,
                        profession,
                        firm_name,
                        payment_from,
                        payment_to,
                        currency,
                        type_of_work,
                        town,
                        vacancyRichText,
                    } = vacancy;

                    return (
                        <div key={id} data-elem={`vacancy-${id}`}>
                            <div className={styles.vacancy__header}>
                                <VacancyPageProfession
                                    profession={profession}
                                    id={id}
                                    vacancy={vacancy}
                                    favorites={favorites}
                                    handleToggleFavorite={handleToggleFavorite}
                                />
                                <p>{firm_name}</p>
                                <VacancyPageSalaryWork
                                    payment_from={payment_from}
                                    payment_to={payment_to}
                                    currency={currency}
                                    type_of_work={type_of_work}
                                />
                                <VacancyPageLocationTown town={town} />
                            </div>
                            <VacancyPageDescription
                                vacancyRichText={vacancyRichText}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
