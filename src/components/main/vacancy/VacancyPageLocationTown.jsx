import React from 'react';
import styles from './VacancyPage.module.scss';

export const VacancyPageLocationTown = ({ town }) => {
    return (
        <div
            className={`${styles.selected__vacancy_list_item_location_town} ${styles.location__class}`}
        >
            <img
                src={require('../../../icons/location.png')}
                alt='location'
                className={styles.location_icon}
            />
            <p className={styles.selected__vacancy_location}>{town.title}</p>
        </div>
    );
};
