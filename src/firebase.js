import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAbDphoQLIaSS9kdyIiCH4x9ohnm_KpNn0",
    authDomain: "marline-react.firebaseapp.com",
    projectId: "marline-react",
    storageBucket: "marline-react.appspot.com",
    messagingSenderId: "757325116164",
    appId: "1:757325116164:web:ce22bdd0a9a960e6e85651",
    measurementId: "G-XZ8PT5ESY2"
}

firebase.initializeApp(firebaseConfig);
const firestore =  firebase.firestore();
export {firestore};

