import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url, xSecret, clientId, clientSecret } from '../../config/config';
import { Filter } from '../../components/main/search/filter/Filter';
import { Search } from '../../components/main/search/search/Search';

export const SearchPage = ({
    favorites,
    vacancies,
    setVacancies,
    handleToggleFavorite,
    accessToken,
}) => {
    const [industryCatalog, setIndustryCatalog] = useState([]);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [openLoader, setOpenLoader] = useState(false);
    const [industryValue, setIndustryValue] = useState([]);
    const [submitButton, setSubmitButton] = useState(false);

    const getIndustryList = async () => {
        await axios
            .get(`${base_url}/2.0/catalogues/`, {
                headers: {
                    'x-secret-key': xSecret,
                    // Authorization: accessToken,
                },
            })
            .then((response) => {
                setIndustryCatalog(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const inputsClearHandler = () => {
        setSalaryFrom('');
        setSalaryTo('');
    };

    const getVacancies = async (
        searchValue = 'Менеджер',
        salaryFrom = 0,
        salaryTo = 1000000,
        industryValue = 33
    ) => {
        if (searchValue.trim().length !== 0 || searchValue.trim() !== '') {
            try {
                setOpenLoader(true);
                await axios
                    .get(`${base_url}/2.0/vacancies`, {
                        params: {
                            keyword: searchValue,
                            payment_from: salaryFrom,
                            published: 1,
                            payment_to: salaryTo,
                            catalogues: industryValue,
                            client_id: clientId,
                            client_secret: clientSecret,
                            no_agreement: 1,
                            count: 100,
                        },
                        headers: {
                            'x-secret-key': xSecret,
                            'X-Api-App-Id': clientSecret,
                            // Authorization: accessToken,
                        },
                    })
                    .then((response) => {
                        const data = response.data;
                        setVacancies(data.objects);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            } finally {
                setOpenLoader(false);
            }
        } else {
            return null;
        }
    };

    useEffect(() => {
        getIndustryList();
        getVacancies();
    }, []);

    return (
        <>
            <main className='main'>
                <Filter
                    inputsClearHandler={inputsClearHandler}
                    industryCatalog={industryCatalog}
                    salaryFrom={salaryFrom}
                    setSalaryFrom={setSalaryFrom}
                    salaryTo={salaryTo}
                    setSalaryTo={setSalaryTo}
                    industryValue={industryValue}
                    setIndustryValue={setIndustryValue}
                    setSubmitButton={setSubmitButton}
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
                    openLoader={openLoader}
                    handleToggleFavorite={handleToggleFavorite}
                />
            </main>
        </>
    );
};
