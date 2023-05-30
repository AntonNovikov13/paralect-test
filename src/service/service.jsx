import axios from 'axios';

export const getIndustryList = async (url, xSecret, setIndustryCatalog) => {
    await axios
        .get(`${url}/2.0/catalogues/`, {
            headers: {
                'x-secret-key': xSecret,
            },
        })
        .then((response) => {
            setIndustryCatalog(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getVacancies = async (
    searchValue,
    salaryFrom,
    salaryTo,
    industryValue,
    setLoading,
    url,
    clientId,
    clientSecret,
    xSecret,
    setVacancies
) => {
    try {
        setLoading(true);
        await axios
            .get(`${url}/2.0/vacancies`, {
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
        setLoading(false);
    }
};

export const handleToggleFavorite = (currentVacancy, favorites, setFavorites) => {
    const favorite = favorites.find(({ id }) => id === currentVacancy.id);
    if (favorite) {
        setFavorites((prevFav) =>
            prevFav.filter(({ id }) => id !== favorite.id)
        );
        return;
    }
    setFavorites((prevVacancy) => [...prevVacancy, currentVacancy]);
};

export const getPagination = (vacanciesArg, currentPage, vacanciesPerPage) => {
    const totalPages = Math.ceil(vacanciesArg.length / vacanciesPerPage);
    const firstVacancyIndex = (currentPage - 1) * vacanciesPerPage;
    const lastVacancyIndex = firstVacancyIndex + vacanciesPerPage;
    const currentVacancies = vacanciesArg.slice(
        firstVacancyIndex,
        lastVacancyIndex
    );

    return { totalPages, currentVacancies };
};

export const setSelectedPage = (selectedPage, CurrentPage, total) => {
    if (selectedPage >= 1 && selectedPage <= total) {
        CurrentPage(selectedPage);
    }
};
