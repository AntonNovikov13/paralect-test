import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Authorization } from './autorization/Authorization';
import { Header } from './header/Header';
import { SearchPage } from '../pages/searchPage/SearchPage';
import { VacancyPage } from '../pages/vacancyPage/VacancyPage';
import { FavoritesListPage } from '../pages/favoritesPage/FavoritesListPage';
import { EmptyPage } from '../pages/emptyPage/EmptyPage';

const Main = () => {
    const [vacancies, setVacancies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [accessToken, setAccessToken] = useState('');

    const handleToggleFavorite = (vacancy) => {
        if (favorites.some((el) => el.id === vacancy.id)) {
            setFavorites(
                favorites.filter((selectedId) => selectedId.id !== vacancy.id)
            );
        } else {
            const res = [...favorites];
            res.push(vacancy);
            setFavorites(res);
        }
        localStorage.setItem('favorites', JSON.stringify(vacancy));
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
                        path='/vacancy'
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
