import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ2OMGgcRlHGPeSlbhTpHrGYTnzgQU2Uw",
  authDomain: "fir-user-auth-1b532.firebaseapp.com",
  projectId: "fir-user-auth-1b532",
  storageBucket: "fir-user-auth-1b532.appspot.com",
  messagingSenderId: "1056281978396",
  appId: "1:1056281978396:web:285a04dbb5ffdd683ce1d9"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}
