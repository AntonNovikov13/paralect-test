import React from 'react';
import { ButtonReset } from './ButtonReset';
import { IndustryCatalog } from './industryCatalog/IndustryCatalog';
import { InputSalaryFrom } from './InputSalaryFrom';
import { InputSalaryTo } from './InputSalaryTo';
import styles from './Filter.module.scss';

export const FilterItem = ({
    inputsClearHandler,
    industryCatalog,
    salaryFrom,
    setSalaryFrom,
    salaryTo,
    setSalaryTo,
    industryValue,
    setIndustryValue,
    setSubmitButton,
}) => {
    const submitFilterForm = () => {
        setSubmitButton(true);
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filter__header}>
                <p className={styles.filter__header_name}>Фильтры</p>
                <ButtonReset inputsClearHandler={inputsClearHandler} />
            </div>
            <IndustryCatalog
                industryCatalog={industryCatalog}
                industryValue={industryValue}
                setIndustryValue={setIndustryValue}
            />
            <p className={styles.title}>Оклад</p>
            <InputSalaryFrom
                salaryFrom={salaryFrom}
                setSalaryFrom={setSalaryFrom}
            />
            <InputSalaryTo salaryTo={salaryTo} setSalaryTo={setSalaryTo} />
            <button
                data-elem="search-button"
                className={styles.apply__button}
                onClick={submitFilterForm}
            >
                Применить
            </button>
        </div>
    );
};
