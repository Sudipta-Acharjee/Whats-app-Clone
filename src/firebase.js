import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpSj2jDQ5OTEc1aaLM62nW3B3q9HuZRD4",
  authDomain: "what-s-app-clone-ea135.firebaseapp.com",
  projectId: "what-s-app-clone-ea135",
  storageBucket: "what-s-app-clone-ea135.appspot.com",
  messagingSenderId: "984097844191",
  appId: "1:984097844191:web:a88ff2158c96720c50326a"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;