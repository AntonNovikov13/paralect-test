import React, { useState, useEffect } from 'react';
import { base_url, xSecret, clientId, clientSecret } from '../../config/config';
import { Filter } from '../../components/main/search/filter/Filter';
import { Search } from '../../components/main/search/search/Search';
import { getIndustryList } from '../../service/service';
import { getVacancies } from '../../service/service';

export const SearchPage = ({
    vacancies,
    setVacancies,
    favorites,
    setFavorites,
    currentPage,
    setCurrentPage,
    vacanciesPerPage,
}) => {
    const [industryCatalog, setIndustryCatalog] = useState([]);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [industryValue, setIndustryValue] = useState('');

    useEffect(() => {
        getVacancies(
            'Менеджер',
            0,
            1000000,
            33,
            setLoading,
            base_url,
            clientId,
            clientSecret,
            xSecret,
            setVacancies
        );
        getIndustryList(base_url, xSecret, setIndustryCatalog);
    }, []);

    return (
        <main className='main'>
            <Filter
                industryCatalog={industryCatalog}
                salaryFrom={salaryFrom}
                setSalaryFrom={setSalaryFrom}
                salaryTo={salaryTo}
                setSalaryTo={setSalaryTo}
                industryValue={industryValue}
                setIndustryValue={setIndustryValue}
                getVacancies={getVacancies}
                setLoading={setLoading}
                setVacancies={setVacancies}
            />
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                salaryFrom={salaryFrom}
                salaryTo={salaryTo}
                industryValue={industryValue}
                vacancies={vacancies}
                getVacancies={getVacancies}
                favorites={favorites}
                loading={loading}
                setFavorites={setFavorites}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                vacanciesPerPage={vacanciesPerPage}
                setLoading={setLoading}
                setVacancies={setVacancies}
            />
        </main>
    );
};
