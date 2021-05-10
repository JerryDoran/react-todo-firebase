import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbTwQcpUp3NQUiwtLxSCfu0__NygSJURU",
  authDomain: "react-todo-app-79550.firebaseapp.com",
  projectId: "react-todo-app-79550",
  storageBucket: "react-todo-app-79550.appspot.com",
  messagingSenderId: "316342629874",
  appId: "1:316342629874:web:8f7eaa387b238280c7a76b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
