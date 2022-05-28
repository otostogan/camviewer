import React from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';


export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route exact path="/auth" element={<AuthPage/>}/>
            <Route
                path="*"
                element={<Navigate to="/auth" />}
            />
        </Routes>
    )
}