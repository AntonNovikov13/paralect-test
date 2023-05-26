import React from 'react';
import styles from './IndustryCatalog.module.scss';

export const IndustryCatalog = ({
    industryValue,
    industryCatalog,
    setIndustryValue,
}) => {
    return (
        <div className={styles.industry__list}>
            <div className={styles.industry__list_item}>
                <p className={styles.title}>Отрасль</p>
                <form>
                    <select
                        className={styles.filter_inputs}
                        placeholder='Выберите отрасль'
                        data-elem="industry-select"
                        onChange={(event) =>
                            setIndustryValue(event.target.value)
                        }
                        value={industryValue}
                        required
                    >
                        <option value=''>Выберите отрасль</option>
                        {industryCatalog.map((item) => (
                            <option
                                key={item.key}
                                value={item.key}
                                className={styles.option__list}
                            >
                                {item.title}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};
