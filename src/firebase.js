import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
  var firebaseConfig = {
    apiKey: "AIzaSyDrA-3OuAkhPn1ARGR0vm10wzjcb3dJQQc",
    authDomain: "slack-e07ff.firebaseapp.com",
    databaseURL: "https://slack-e07ff.firebaseio.com",
    projectId: "slack-e07ff",
    storageBucket: "slack-e07ff.appspot.com",
    messagingSenderId: "465702697856",
    appId: "1:465702697856:web:eed03406d8345f6fa31f65",
    measurementId: "G-BW7BSVDH5H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;