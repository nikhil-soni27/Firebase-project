import firebase from 'firebase';
// import firebase from '@firebase/app';
// require('firebase/auth');
import 'firebase/auth'
// import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDjA_dtDat0eam7NIjWEwjmHlxoda9fT9I",
    authDomain: "login-a3b0b.firebaseapp.com",
    projectId: "login-a3b0b",
    storageBucket: "login-a3b0b.appspot.com",
    messagingSenderId: "212666479232",
    appId: "1:212666479232:web:27ffd3e62b3e0718e66c65"
  };

  const Fire = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore() 

  export {Fire,db};