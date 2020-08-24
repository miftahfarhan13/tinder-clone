import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBX4fOnaZ69MtYG7-ilas11SxIaFlJRa_o",
    authDomain: "tinder-clone-32e65.firebaseapp.com",
    databaseURL: "https://tinder-clone-32e65.firebaseio.com",
    projectId: "tinder-clone-32e65",
    storageBucket: "tinder-clone-32e65.appspot.com",
    messagingSenderId: "903438891159",
    appId: "1:903438891159:web:e808b4cef711715dbb91d2",
    measurementId: "G-NK9WY80NG8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;