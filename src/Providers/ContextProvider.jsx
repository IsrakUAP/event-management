import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const ContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authDetails = {
      user,
      createUser
    }
    return (
       <AuthContext.Provider value={authDetails}>
          {children}
       </AuthContext.Provider>
    );
};

export default ContextProvider;