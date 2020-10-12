import React from 'react';

import '../src/app.scss';

import Provider from '../src/Provider';

import firebase from './firebase';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // In general, className shouldn't be editable in the storybook.
  argTypes: { className: { type: null } }
}

export const decorators = [
  Story => {
    return <Provider firebase={firebase}><Story /></Provider>;
  }
]
