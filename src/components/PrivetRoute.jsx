import React, { useContext } from 'react';
import { AuthContext } from '../Auth/auth';
// import { Navigate,      useLocation  } from 'react-router';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location)
    // const navigates = useNavigate()

   
  if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }


    if (!users) {
        // navigates('/login', { state: { form: location } })
        return <Navigate to="/login" state={{ form: location }} replace />
    }
   

// 

    return children;


};

export default PrivetRoute;