import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    console.log(res.data.token)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;