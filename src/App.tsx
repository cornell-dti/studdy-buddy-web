import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import './app.scss';

import * as firebase from "firebase/app";
import "firebase/auth";

import 'react-jitsi';

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>

      </div>
    </Root>
  )
}

export default App;
