import React from 'react';
import styles from './VacancyPage.module.scss';

export const VacancyPageDescription = ({ vacancyRichText }) => {
    return (
        <div className={styles.vacancy__description}>
            <div>
                <h2>Описание</h2>
                <div
                    className={styles.vacancy__description_child}
                    dangerouslySetInnerHTML={{
                        __html: vacancyRichText,
                    }}
                />
            </div>
        </div>
    );
};
