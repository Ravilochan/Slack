import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
  var firebaseConfig = {
    apiKey: "#",
    authDomain: "slack-e07ff.firebaseapp.com",
    databaseURL: "https://slack-e07ff.firebaseio.com",
    projectId: "slack-e07ff",
    storageBucket: "slack-e07ff.appspot.com",
    messagingSenderId: "#",
    appId: "#",
    measurementId: "#"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
