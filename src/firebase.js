import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAQRhnDpo4DLjhakPaIYl7ciIpn4XeeedI",
  authDomain: "iknowwait-30128.firebaseapp.com",
  projectId: "iknowwait-30128",
  storageBucket: "iknowwait-30128.appspot.com",
  messagingSenderId: "1053601879401",
  appId: "1:1053601879401:web:387d74641363da8b5d59f8",
  measurementId: "G-H0L449TQD6"
}).auth()
