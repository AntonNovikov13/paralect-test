import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VacancyList.module.scss';

export const VacancyListCard = ({
    id,
    profession,
    payment_from,
    payment_to,
    currency,
    type_of_work,
    town,
}) => {
    return (
        <Link
            to={`/vacancy/${id}`}
            state={{ id }}
            className={styles.vacancy__list_item}
            data-elem={`vacancy-${id}`}
        >
            <div>
                <div className={styles.vacancy__list_item_header}>
                    {profession}
                </div>
                <div className={styles.vacancy__list_item_salary_dot_type_work}>
                    <p className={styles.vacancy_salary_from_to}>
                        з/п от {payment_from} - до {payment_to} {currency}
                    </p>
                    <p className={styles.dot}>•</p>
                    <p className={styles.vacancy_type_of_work}>
                        {type_of_work.title}
                    </p>
                </div>
                <div className={styles.vacancy__list_item_location_town}>
                    <img
                        src={require('../../../../icons/location.png')}
                        alt='location'
                        className={styles.location_icon}
                    />
                    <p className={styles.vacancy_location}>{town.title}</p>
                </div>
            </div>
        </Link>
    );
};
