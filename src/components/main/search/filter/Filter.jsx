import React from 'react';
import { ButtonReset } from './ButtonReset';
import { IndustryCatalog } from './industryCatalog/IndustryCatalog';
import { InputSalaryFrom } from './InputSalaryFrom';
import { InputSalaryTo } from './InputSalaryTo';
import { FilterApplyButton } from './FilterApplyButton';
import styles from './Filter.module.scss';

export const Filter = ({
    industryCatalog,
    salaryFrom,
    setSalaryFrom,
    salaryTo,
    setSalaryTo,
    industryValue,
    setIndustryValue,
    getVacancies,
    setLoading,
    setVacancies,
}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.filter__header}>
                <p className={styles.filter__header_name}>Фильтры</p>
                <ButtonReset
                    setSalaryFrom={setSalaryFrom}
                    setSalaryTo={setSalaryTo}
                    setIndustryValue={setIndustryValue}
                />
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
            <FilterApplyButton
                salaryFrom={salaryFrom}
                salaryTo={salaryTo}
                industryValue={industryValue}
                getVacancies={getVacancies}
                setLoading={setLoading}
                setVacancies={setVacancies}
            />
        </div>
    );
};
