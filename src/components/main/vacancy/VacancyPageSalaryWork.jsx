import React from 'react';
import styles from './VacancyPage.module.scss';

export const VacancyPageSalaryWork = ({
    payment_from,
    payment_to,
    currency,
    type_of_work,
}) => {
    return (
        <div
            className={styles.selected__vacancy_list_item_salary_dot_type_work}
        >
            <p className={styles.selected__vacancy_salary_from_to}>
                з/п от {payment_from} - до {payment_to} {currency}
            </p>
            <p className={styles.dot}>•</p>
            <p className={styles.selected__vacancy_type_of_work}>
                {type_of_work.title}
            </p>
        </div>
    );
};
