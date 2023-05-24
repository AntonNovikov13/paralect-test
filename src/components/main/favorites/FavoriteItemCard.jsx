import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FavoritesList.module.scss';

export const FavoriteItemCard = ({
    id,
    profession,
    firm_name,
    payment_from,
    payment_to,
    currency,
    type_of_work,
    town,
}) => {
    return (
        <>
            <Link to='/vacancy' state={{ id }} className={styles.vacancy_name}>
                <div
                    key={id}
                    className={styles.favorites__list_item}
                    data-elem={`vacancy-${id}`}
                >
                    <div className={styles.favorites__list__item_header}>
                        <p className={styles.favorites_name}>{profession}</p>
                    </div>
                    <p>{firm_name}</p>
                    <div
                        className={
                            styles.favorites__list__item_salary_dot_type_work
                        }
                    >
                        <p className={styles.favorites_salary_from_to}>
                            з/п от {payment_from} - до {payment_to} {currency}
                        </p>
                        <p className={styles.dot}>•</p>
                        <p className={styles.favorites_type_of_work}>
                            {type_of_work.title}
                        </p>
                    </div>
                    <div className={styles.favorites__list__item_location_town}>
                        <img
                            src={require('../../../icons/location.png')}
                            alt='location'
                            className={styles.location_icon}
                        />
                        <p className={styles.favorites_location}>
                            {town.title}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};
