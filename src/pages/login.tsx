import React from 'react'

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export default () => {
  return (
    <div className="sm-page-login">
      <div className="content">
        <div className="app-splash">
          <img src="/assets/logo.svg" />
          <h1 className="app-title">StudyBuddy</h1>

        </div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  )
}
