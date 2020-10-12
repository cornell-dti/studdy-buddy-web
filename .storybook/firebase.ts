import * as firebase from 'firebase';

import { MockApp } from 'mockbase';

const mockApp = new MockApp('Study Buddy Mock');
const firebaseApp: firebase.app.App = mockApp;

// Patch onIdTokenChanged with onAuthStateChanged as they have identical signatures.
{
    const auth = mockApp.auth();

    auth.onIdTokenChanged = auth.onAuthStateChanged;
}

export { mockApp };

export default firebaseApp;