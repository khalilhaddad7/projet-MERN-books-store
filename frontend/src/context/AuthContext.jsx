import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useContext, useEffect, useState } from "react";
import { Auth } from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = ()=> {
    return useContext(AuthContext)
}
const googleprovider = new GoogleAuthProvider();


// AuthProvider
export const AuthProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);

// register user
const registerUser = async(email,password)=>{
    return await createUserWithEmailAndPassword(Auth, email, password)

}
// login user
const loginUser = async (email,password)=>{
    return await signInWithEmailAndPassword(Auth, email, password)
}
// register with google
const signInWithGoogle = async () =>{
    return await signInWithPopup(Auth, googleprovider)
}
// logout user
const logout = () =>{
    return signOut(Auth)
}

// manage user 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(Auth, (user)=>{
        setCurrentUser(user)
        setLoading(false)
        if(user){
            const {email,displayName,photoURL} = user ;
            const userData = {
                email,username: displayName,photo: photoURL
            }
        }
    })

    return () => unsubscribe();
},[])




    const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}