import React from 'react';
import { Routes, Route, redirect, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import HomePage from '../pages/HomePage';


const PrivateRoute = ({ children, ...rest }) => {

    let { user } = useContext(AuthContext);

    return (
        !user ? <Navigate to='/login'/> : <HomePage/>
    )
}

export default PrivateRoute