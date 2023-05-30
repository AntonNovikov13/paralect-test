import React from 'react';
import { useLocation } from 'react-router-dom';
import { VacancyPageDescription } from '../../components/main/vacancy/VacancyPageDescription';
import { VacancyListCard } from '../../components/main/search/vacancyList/VacancyListCard';
import { Star } from '../../components/main/star/Star';
import stylesFromVacPage from '../../components/main/vacancy/VacancyPage.module.scss';
import stylesFromVacList from '../../components/main/search/vacancyList/VacancyList.module.scss'

export const VacancyPage = ({ vacancies, favorites, setFavorites }) => {
    const location = useLocation();
    const { id } = location.state;
    const filteredVacancyItem = vacancies.filter((vacId) => vacId.id === id);

    return (
        <div className={stylesFromVacPage.vacancy}>
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
                            <VacancyListCard
                                id={id}
                                profession={profession}
                                payment_from={payment_from}
                                payment_to={payment_to}
                                currency={currency}
                                type_of_work={type_of_work}
                                town={town}
                            />
                            <div className={stylesFromVacList.vacancylist}>
                                <Star
                                    id={id}
                                    vacancy={vacancy}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                />
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
