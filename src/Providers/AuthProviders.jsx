import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleAuthProvider = new GoogleAuthProvider();

  const signIn = ( email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    return signOut(auth);
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleAuthProvider);
  }

  // observe auth state change
  useEffect( () => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    }
  }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;