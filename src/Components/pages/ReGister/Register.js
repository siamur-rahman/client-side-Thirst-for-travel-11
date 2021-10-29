import 'bootstrap/dist/css/bootstrap.min.css';
import useFirebase from '../../hooks/useFirebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import inializeAuthentication from './../Login/Firebase/firebase.init';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

inializeAuthentication();

const Register = () => {
   const { signInUsingGoogle } = useFirebase();
   const [name, setName] = useState('');
   const [user, setUser] = useState({});
   const [email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [isLogin, setIsLogin] = useState(false);
   const location = useLocation()
   const history = useHistory();


   const redirect_uri = location.state?.from || '/home';

   const googleLogIn = () => {
      signInUsingGoogle()
         .then(result => {
            history.push(redirect_uri);
         })
   }

   const auth = getAuth();

   //cheakbox...TOGGLE LOGIN
   const toggleLogin = e => {
      setIsLogin(e.target.checked);
      console.log(e.target.checked);
   }
   //handleNameChange
   const handleNameChange = e => {
      setName(e.target.value);
   }

   //Handle email Change
   const handleEmailChange = e => {
      setEmail(e.target.value);
   }

   //Handle password Change
   const handlePasswordChange = e => {
      setPassword(e.target.value);
   }

   //HANDLEREGISTRATION
   const handleRegistration = (e) => {
      e.preventDefault();
      if (Password.length < 6) {
         setError('password should be at least 6 characters long');
         return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(Password)) {
         setError('Opps !! password must contain two upper case');
         return;
      }
      isLogin ? processLogin(email, Password) : registerNewUser(email, Password)
   }

   //LOG IN USER
   const processLogin = (email, Password) => {
      signInWithEmailAndPassword(auth, email, Password)
         .then(result => {
            const user = result.user;
            console.log(user);
            history.push(redirect_uri);
            setError('');
         })
         .catch(error => {
            setError(error.message);
         })
   }

   //REGISTER USER
   const registerNewUser = (email, Password) => {
      createUserWithEmailAndPassword(auth, email, Password)
         .then(result => {
            const { displayName, email, photoURL } = result.user;
            const logInUser = {
               name: displayName,
               email: email,
               photo: photoURL
            };
            setUser(logInUser);
            setError('');
            varifyEmail();
            setUserName();
         })
         .catch(error => {
            setError(error.message);
         })
   }
   //set userNAME
   const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name })
         .then(result => { })
   }

   //EMAIL VARIFICATION
   const varifyEmail = () => {
      sendEmailVerification(auth.currentUser)
         .then(result => {
            console.log(result);
         })
   }

   //HANDLE RESET PASSWORD
   const handleResetPassword = () => {
      sendPasswordResetEmail(auth, email)
         .then(result => { })
   }

   return (
      <div className="mx-5">
         <br /><br />
         <form onSubmit={handleRegistration}>
            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
            {!isLogin && <div className="row mb-3">
               <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
               <div className="col-sm-10">
                  <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="your name" required />
               </div>
            </div>
            }
            <div className="row mb-3">
               <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
               <div className="col-sm-10">
                  <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
               </div>
            </div>
            <div className="row mb-3">
               <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
               <div className="col-sm-10">
                  <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
               </div>
            </div>
            <div className="row mb-3">
               <div className="col-sm-10 offset-sm-2">
                  {!user ?

                     <div className="row mb-3 text-success">Congreats ! all Private services is open for you. Visit please... </div>
                     :

                     <div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <div > </div>
                     </div>
                  }
                  <div className="form-check">
                     <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                     <div className="d-flex ">
                        <label className="form-check-label  mx-4" htmlFor="gridCheck1">
                           Already Registered?
                        </label>

                        <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                     </div>

                     <br /><br />

                     <div className="text-center">

                        <button onClick={googleLogIn} className="btn btn-warning mb-2 mx-5"> Sign In With Google </button>
                        <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}

export default Register;