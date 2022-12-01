import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Components/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, spinner } = useContext(authContext)
    const location = useLocation()
    if (spinner) {
       return <div>Loading...</div>
    }
    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
    }
    return children;

};

export default PrivateRoute;