import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "whatsapp-clone-384eb.firebaseapp.com",
    projectId: "whatsapp-clone-384eb",
    storageBucket: "whatsapp-clone-384eb.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-8L5L4EP6H8"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db
