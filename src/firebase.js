import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCJfTpjSvZTEBBJw6Uu35cMnESnmIt9qQU",
  authDomain: "react-shop-70ddd.firebaseapp.com",
  databaseURL: "https://react-shop-70ddd.firebaseio.com",
  projectId: "react-shop-70ddd",
  storageBucket: "react-shop-70ddd.appspot.com",
  messagingSenderId: "111495049942",
  appId: "1:111495049942:web:50bad3c14539d427c60f77"
};
// Initialize Firebase
const fb=firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();