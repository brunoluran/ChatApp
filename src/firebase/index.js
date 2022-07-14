import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firebase-firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyANKyEYJLaRyE_on9V_sgQEb5AbrBL4Kyo',
  authDomain: 'chatapp-5a5e9.firebaseapp.com',
  projectId: 'chatapp-5a5e9',
  storageBucket: 'chatapp-5a5e9.appspot.com',
  messagingSenderId: '922040974976',
  appId: '1:922040974976:web:615e5c0ac6bf005260f065',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
