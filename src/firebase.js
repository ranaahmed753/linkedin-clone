import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbhfSUOvGhhctkApYoIuq4BFLCWY6vPOc",
    authDomain: "linkedin-clone-690c0.firebaseapp.com",
    projectId: "linkedin-clone-690c0",
    storageBucket: "linkedin-clone-690c0.appspot.com",
    messagingSenderId: "831171128281",
    appId: "1:831171128281:web:7ae1affb0da2e055cac7c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;