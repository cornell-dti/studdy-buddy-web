import React from 'react';
import * as firebase from 'firebase';

import store from './reducers';
import { Provider as ReduxProvider } from 'react-redux';

import { UserContext, useRawUser } from './hooks';

const Provider: React.FC<{
    firebase: firebase.app.App
}> = ({ children, firebase }) => {
    const userState = useRawUser(firebase);

    return (
        <ReduxProvider store={store}>
            <UserContext.Provider value={userState}>
                <div className="content">
                    {children}
                </div>
            </UserContext.Provider>
        </ReduxProvider>
    );
}

export default Provider;
