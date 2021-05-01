import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


//! TODO: set .env
var firebaseConfig = {
    apiKey: "AIzaSyDxFL5cR2J_vzlw4eAEgl7JXSQfT2GQwhw",
    authDomain: "clubhouse-text.firebaseapp.com",
    projectId: "clubhouse-text",
    storageBucket: "clubhouse-text.appspot.com",
    messagingSenderId: "795742874640",
    appId: "1:795742874640:web:718698a58c0accd25bee95",
    measurementId: "G-XRDXZECTQZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
  export { db, firebase, auth, provider}