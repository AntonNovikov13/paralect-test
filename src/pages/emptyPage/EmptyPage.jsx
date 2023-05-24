import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Empty.module.scss';

export const EmptyPage = () => {
    return (
        <div className={styles.empty__page}>
            <figure>
                <img
                    src={require('../../icons/emptyhuman.png')}
                    alt='human'
                    className={styles.empty__page_icon}
                />
                <figcaption className={styles.empty__page_text}>
                    Упс, здесь еще ничего нет!
                </figcaption>
            </figure>
            <Link to='/' className={styles.empty__page_btn}>
                Поиск вакансий
            </Link>
        </div>
    );
};
