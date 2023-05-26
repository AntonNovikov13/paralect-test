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
    const [accessToken, setAccessToken] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const handleToggleFavorite = (currenVacancy) => {
        const favorite = favorites.find(({ id }) => id === currenVacancy.id);
        if (favorite) {
            setFavorites((prevFav) =>
                prevFav.filter(({ id }) => id !== favorite.id)
            );
            return;
        }
        setFavorites((prevVacancy) => [...prevVacancy, currenVacancy]);
    };

    return (
        <>
            <Router>
                <Authorization setAccessToken={setAccessToken} />
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
                                handleToggleFavorite={handleToggleFavorite}
                                accessToken={accessToken}
                            />
                        }
                    />
                    <Route
                        path='/vacancy/:id'
                        element={
                            <VacancyPage
                                vacancies={vacancies}
                                favorites={favorites}
                                handleToggleFavorite={handleToggleFavorite}
                            />
                        }
                    />
                    <Route
                        path='/favorites'
                        element={
                            <FavoritesListPage
                                favorites={favorites}
                                setFavorites={setFavorites}
                                handleToggleFavorite={handleToggleFavorite}
                            />
                        }
                    />
                    <Route path='*' element={<EmptyPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default Main;
