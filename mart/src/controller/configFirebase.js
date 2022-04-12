import firebase from 'firebase/compat/app'; 
import { getFirestore } from "firebase/firestore"  
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/compat/auth';     
    // Configure Firebase.
    const config = {
        apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain:process.env.REACT_APP_FIREBASE_DOMAIN, 
        databaseURL: "https://bibomart-886e6-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "bibomart-886e6",
        storageBucket: "bibomart-886e6.appspot.com",
        messagingSenderId: "412284071946",
        appId: process.env.REACT_APP_APP_ID,
        measurementId: "G-2NSMZZMMJ1"
        // ...
    }; 
    firebase.initializeApp(config); 
    const db = getFirestore() 
    const auth = firebase.auth() 
    const dataAnalyst =getAnalytics()
 
export { db,auth,dataAnalyst}
