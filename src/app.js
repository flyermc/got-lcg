import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BoardContainer from './containers/board/BoardContainer';
import Lobby from './containers/lobby/Lobby';
import Layout from './components/Layout';
import configureStore from './redux/store';
import './style/base.scss';

const socket = require('socket.io-client')('http://localhost:3000');

const { store, persistor } = configureStore();

const connectSocket = (component) => {
  return props => React.createElement(component, { socket, ...props });
};

render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <PersistGate
            loading={<div>Hello loading</div>}
            persistor={persistor}>
            <Route exact path="/" component={connectSocket(BoardContainer)} />
          </PersistGate>
          <Route path="/lobby" component={connectSocket(Lobby)} />
          <Route path='/test' component={Lobby} />
        </Switch>
    </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
