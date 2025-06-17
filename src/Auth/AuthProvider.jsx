import React, { useEffect, useState } from 'react';
import { AuthContext } from './auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.init';
import axios from 'axios';
// import { Navigate, useLocation, useNavigate } from 'react-router';
// import { useLocation, useNavigate } from 'react-router';

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)



    const provider = new GoogleAuthProvider();

    const handleSignUpPass = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignInPass = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () => {
        // setLoading(true)
        return signOut(auth)
    }

    const handleGoogleSign = () => {
        // setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //  export const user = users.email;


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.email) {
                setUsers(currentUser)
                setLoading(false)

                const email = currentUser?.email
                //  console.log(email)
                axios.post('https://b2b-projects-server.vercel.app/jwt', { email }, { withCredentials: true })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
            } else {
                setUsers(null);
                setLoading(false);
            }


            return unsubscribe()
        })
    }, [])


    const userInfo = {
        handleSignUpPass,
        handleSignInPass,
        handleLogOut,
        handleGoogleSign,
        users,
        loading
    }





    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;