import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default firebase.initializeApp({
  apiKey: "AIzaSyBaSMd1-mK6L2PkGB8s0IO2y0Mw4-jpNIk",
  authDomain: "chat-app-with-firestore-aac6c.firebaseapp.com",
  databaseURL: "https://chat-app-with-firestore-aac6c.firebaseio.com",
  projectId: "chat-app-with-firestore-aac6c",
  storageBucket: "chat-app-with-firestore-aac6c.appspot.com",
  messagingSenderId: "160618496536",
  appId: "1:160618496536:web:8baa56fc32879652ce796d"
});