
import firebase from 'firebase';
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8s74yKvAPDb8bn-eTReQGNDq5I6NBmhM",
    authDomain: "fintech2019-team2.firebaseapp.com",
    databaseURL: "https://fintech2019-team2.firebaseio.com",
    projectId: "fintech2019-team2",
    storageBucket: "fintech2019-team2.appspot.com",
    messagingSenderId: "624495565473",
    appId: "1:624495565473:web:7304c4bdba5c6452f32ee0",
    measurementId: "G-Y9ZET87CH9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();