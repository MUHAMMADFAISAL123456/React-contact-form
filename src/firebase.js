import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration

    apiKey: "AIzaSyCzraJiomkdZuMnCdweOcjFLmgQmfD-ZB0",
    authDomain: "react-contact-form-d5e55.firebaseapp.com",
    projectId: "react-contact-form-d5e55",
    storageBucket: "react-contact-form-d5e55.appspot.com",
    messagingSenderId: "1051870881215",
    appId: "1:1051870881215:web:13a6e2b790671ad4b02d0a"
    

});

var db = firebaseApp.firestore();

export { db };
