import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG29iTjuencNxCEq4to6-Nnm4ayNjbNww",
  authDomain: "https://shivanshsharma13.github.io/facebook_clone",
  databaseURL: "https://facebook-clone-1390d.firebaseio.com",
  projectId: "facebook-clone-1390d",
  storageBucket: "facebook-clone-1390d.appspot.com",
  messagingSenderId: "1023603244322",
  appId: "1:1023603244322:web:54a477f8e561dc4532397b",
  measurementId: "G-G1ZT1FWF32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

