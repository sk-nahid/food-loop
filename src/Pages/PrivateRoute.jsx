import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';
import Register from './Register';
import Login from './Login';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>

};

export default PrivateRoute;