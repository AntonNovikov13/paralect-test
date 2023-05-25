import React from 'react';
import { FilterItem } from './FilterItem';

export const Filter = ({
    inputsClearHandler,
    industryCatalog,
    salaryFrom,
    setSalaryFrom,
    salaryTo,
    setSalaryTo,
    industryValue,
    setIndustryValue,
    getVacancies,
}) => {
    return (
        <>
            <FilterItem
                inputsClearHandler={inputsClearHandler}
                industryCatalog={industryCatalog}
                salaryFrom={salaryFrom}
                setSalaryFrom={setSalaryFrom}
                salaryTo={salaryTo}
                setSalaryTo={setSalaryTo}
                industryValue={industryValue}
                setIndustryValue={setIndustryValue}
                getVacancies={getVacancies}
            />
        </>
    );
};
