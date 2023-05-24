import React from 'react';
import { VacancyPageStar } from './VacancyPageStar';
import styles from './VacancyPage.module.scss';

export const VacancyPageProfession = ({
    profession,
    id,
    vacancy,
    favorites,
    handleToggleFavorite,
}) => {
    return (
        <div className={styles.selected__vacancy_list_item_header}>
            <p className={styles.selected__vacancy_name}>{profession}</p>
            <VacancyPageStar
                vacancy={vacancy}
                id={id}
                favorites={favorites}
                handleToggleFavorite={handleToggleFavorite}
            />
        </div>
    );
};
