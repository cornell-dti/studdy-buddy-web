import * as firebase from "firebase/app";
import "firebase/auth";

// TODO: Don't hardcode this configuration.
const firebaseConfig = {
    apiKey: "AIzaSyAb385zMHhcADsbSCQkIsRRW6dQhaOwiQY",
    authDomain: "studymap-dev.firebaseapp.com",
    databaseURL: "https://studymap-dev.firebaseio.com",
    projectId: "studymap-dev",
    storageBucket: "studymap-dev.appspot.com",
    messagingSenderId: "536203985527",
    appId: "1:536203985527:web:5007c9aaab0f45f735bc72"
};

let firebaseApp: firebase.app.App;

if (firebase.apps.length === 0) {
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
    firebaseApp = firebase.app();
}

export default firebaseApp;