
// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDCNf2H7Vw_m3YT0ok64_CNk6Z58dNbATo",
  authDomain: "linkedin-clone-fc790.firebaseapp.com",
  projectId: "linkedin-clone-fc790",
  storageBucket: "linkedin-clone-fc790.appspot.com",
  messagingSenderId: "75527532268",
  appId: "1:75527532268:web:b7cff15d477732446fbfc9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();


export { auth, provider };
export default db;
 

  // const firebaseApp=firebase.initializeApp(firebaseConfig);
  // const db= firebaseApp.firestore();
  // const auth=firebase.auth();
  // const provider =new firebase.auth.GoogleAuthProvider();
  // const storage=firebase.storage();
// export {db,auth};
