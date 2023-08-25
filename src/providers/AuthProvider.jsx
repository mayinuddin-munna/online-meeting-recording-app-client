import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import { useSelector } from 'react-redux';
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const user = useSelector((state) => state.data.user.user);
    const isLoading = useSelector((state) => state.data.user.isLoading);

    const googleProvider = new GoogleAuthProvider();


    const authInfo = {
        user,
        isLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;