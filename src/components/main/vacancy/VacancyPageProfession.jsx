import React from 'react';
import styles from './VacancyPage.module.scss';

export const VacancyPageProfession = ({ profession }) => {
    return (
        <div className={styles.selected__vacancy_list_item_header}>
            <p className={styles.selected__vacancy_name}>{profession}</p>
        </div>
    );
};
