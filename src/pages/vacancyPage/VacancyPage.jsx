import React from 'react';
import { useLocation } from 'react-router-dom';
import { VacancyPageDescription } from '../../components/main/vacancy/VacancyPageDescription';
import { VacancyPageProfession } from '../../components/main/vacancy/VacancyPageProfession';
import { VacancyPageSalaryWork } from '../../components/main/vacancy/VacancyPageSalaryWork';
import { VacancyPageLocationTown } from '../../components/main/vacancy/VacancyPageLocationTown';
import { Star } from '../../components/main/star/Star';
import styles from '../../components/main/vacancy/VacancyPage.module.scss';

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
                                />
                                <div className={styles.vacancypage}>
                                    <Star
                                        id={id}
                                        vacancy={vacancy}
                                        favorites={favorites}
                                        handleToggleFavorite={
                                            handleToggleFavorite
                                        }
                                    />
                                </div>
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
