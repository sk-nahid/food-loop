import React, { Children, use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const ContextProvidor = ({ children }) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)

    //register
    const singUp = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    //register with google
    const googleLogin = () => {
        return signInWithPopup(auth,provider)
    }
    //login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //user
    useEffect(() => {
        const unSubcirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return  () => {
            unSubcirbe
        }
    }, [])
    //sing out

    const logOut = () => {
        return signOut(auth)
    }

    console.log(user)


    const authData = {
        singUp,
        googleLogin,
        login,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default ContextProvidor;