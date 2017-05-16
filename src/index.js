import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App/App';
import './index.css';
import todoApp from './redux/reducers'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
