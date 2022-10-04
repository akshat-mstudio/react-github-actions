import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import { Drawer } from './container';
import configureStore from './store';
const store = configureStore();
console.log("envs \n", process.env);
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Drawer />
      </Fragment>
    </Provider>
  )
}

export default App;
