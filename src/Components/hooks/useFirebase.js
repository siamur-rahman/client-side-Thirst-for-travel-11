
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Components/pages/Login/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();
   const signInUsingGoogle = () => {
      setIsLoading(true);


      return signInWithPopup(auth, googleProvider)//ei line e shudhu return bad
      // .then(result => {
      //    const { displayName, email, photoURL } = result.user;
      //    const logInUser = {
      //       name: displayName,
      //       email: email,
      //       photo: photoURL
      //    };
      //    setUser(logInUser);
      // })
      // .finally(() => setIsLoading(false));
   }

   // observe user state change
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
         }
         else {
            setUser({})
         }
         setIsLoading(false);
      });
      return () => unsubscribed;
   }, [auth])

   const logOut = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => { })
         .finally(() => setIsLoading(false));
   }

   return {
      user,
      isLoading,
      signInUsingGoogle,
      logOut
   }
}

export default useFirebase;


