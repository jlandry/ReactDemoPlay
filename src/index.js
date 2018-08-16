import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './ReactDemo/Reducer.js'
import './index.css';
import 'typeface-roboto'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
