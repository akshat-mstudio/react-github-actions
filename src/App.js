import { Provider } from 'react-redux';
import React, { Fragment } from 'react';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator
} from "@aws-amplify/ui-react";

import { Drawer } from './container';
import configureStore from './store';
const store = configureStore();

function App({signOut}) {
  return (
    <Provider store={store}>
      <Fragment>
        <Drawer signOut={signOut} />
      </Fragment>
    </Provider>
  )
}

export default withAuthenticator(App);
