import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const ContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);
    const createUser = (email,password,displayName,photoURL) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password ,displayName,photoURL);
    }
    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authDetails = {
      user,
      loading,
      createUser,
      logIn,
      logout 
    }
    return (
       <AuthContext.Provider value={authDetails}>
          {children}
       </AuthContext.Provider>
    );
};

export default ContextProvider;