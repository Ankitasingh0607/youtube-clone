import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5881a_Kaf_3bTPlK1NKFjmhloQcDM248",
  authDomain: "clone-a13bd.firebaseapp.com",
  projectId: "clone-a13bd",
  storageBucket: "clone-a13bd.appspot.com",
  messagingSenderId: "540438678059",
  appId: "1:540438678059:web:03e17cc34ebb57b72bb86e"
}
firebase.initializeApp(firebaseConfig)

export default firebase.auth()