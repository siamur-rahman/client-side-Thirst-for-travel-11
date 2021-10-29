import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const inializeAuthentication = () => {
   initializeApp(firebaseConfig);
}

export default inializeAuthentication;