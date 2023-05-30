import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Authorization } from './autorization/Authorization';
import { Header } from './header/Header';
import { SearchPage } from '../pages/searchPage/SearchPage';
import { VacancyPage } from '../pages/vacancyPage/VacancyPage';
import { FavoritesListPage } from '../pages/favoritesPage/FavoritesListPage';
import { EmptyPage } from '../pages/emptyPage/EmptyPage';
import useLocalStorage from './main/hook/useLocalStorageHook';

const Main = () => {
    const [vacancies, setVacancies] = useState([]);
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const [currentPage, setCurrentPage] = useState(1);
    const [vacanciesPerPage] = useState(4);

    return (
        <Router>
            <Authorization />
            <Header favorites={favorites} />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchPage
                            vacancies={vacancies}
                            setVacancies={setVacancies}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            vacanciesPerPage={vacanciesPerPage}
                        />
                    }
                />
                <Route
                    path='/vacancy/:id'
                    element={
                        <VacancyPage
                            vacancies={vacancies}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    }
                />
                <Route
                    path='/favorites'
                    element={
                        <FavoritesListPage
                            favorites={favorites}
                            setFavorites={setFavorites}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            vacanciesPerPage={vacanciesPerPage}
                        />
                    }
                />
                <Route path='*' element={<EmptyPage />} />
            </Routes>
        </Router>
    );
};

export default Main;
