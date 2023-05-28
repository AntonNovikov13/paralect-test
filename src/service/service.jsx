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
