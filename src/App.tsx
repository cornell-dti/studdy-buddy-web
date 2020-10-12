import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import Loading from './components/Loading';

import Provider from './Provider';

import firebase from './firebase';

import './app.scss';

const App = () => {
  return (
    <Root>
      <Provider firebase={firebase}>
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Provider>
    </Root>
  );
}

export default App;
