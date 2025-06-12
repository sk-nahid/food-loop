import React, { Children, use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const ContextProvidor = ({ children }) => {
    const [loading, setLoading]= useState(true)

    //register
    const singUp = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authData = {
        singUp,
        login,
        loading
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default ContextProvidor;