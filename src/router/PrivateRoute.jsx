import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const nextLoacation = useLocation();
    console.log(nextLoacation.pathname);

    if (loading) {
        return <div className='flex min-h-60 items-center justify-center'><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={nextLoacation.pathname} to={'/login'}></Navigate>;
};

import PropTypes from 'prop-types';
PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;