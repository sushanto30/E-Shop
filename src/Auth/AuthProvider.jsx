import React, { useEffect, useState } from 'react';
import { AuthContext } from './auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {

    const [users , setUsers]=useState(null)
    const provider = new GoogleAuthProvider();

const handleSignUpPass = (email , password )=>{
    return createUserWithEmailAndPassword(auth , email ,password)
}
const handleSignInPass = (email , password)=>{
    return signInWithEmailAndPassword(auth ,email ,password)
}

const handleLogOut = ()=>{
   return signOut(auth)
}

const handleGoogleSign = ()=>{
    return signInWithPopup(auth ,provider)
}
//  export const user = users.email;


useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
        if(currentUser?.email){
            setUsers(currentUser)
            const email = currentUser?.email
            //  console.log(email)
            axios.post('http://localhost:3000/jwt', {email} ,{withCredentials:true} )
            .then(res=>console.log(res.data))
            .catch(error=>console.log(error))
        }

        return unsubscribe()
    } )
},[])
 

const userInfo = {
  handleSignUpPass,
  handleSignInPass,
  handleLogOut,
  handleGoogleSign,
  users
}





    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;