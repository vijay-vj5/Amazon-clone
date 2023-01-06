import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDx8OIaalHb8JIPE2ZO1NLCJdvi7SAzSU",
  authDomain: "clone-6f8fe.firebaseapp.com",
  projectId: "clone-6f8fe",
  storageBucket: "clone-6f8fe.appspot.com",
  messagingSenderId: "868607456502",
  appId: "1:868607456502:web:99d93e868ce70f34e4a8d7",
  measurementId: "G-1S0CS8ZPVZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };