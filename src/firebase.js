import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmuodV4KCQWUUGFwlAlJZZvAs0nHJKnWI",
  authDomain: "react-blog-app-4ecd4.firebaseapp.com",
  projectId: "react-blog-app-4ecd4",
  storageBucket: "react-blog-app-4ecd4.appspot.com",
  messagingSenderId: "777476527924",
  appId: "1:777476527924:web:20daf80719287d33f17761",
  measurementId: "G-H5GTMQSMMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};