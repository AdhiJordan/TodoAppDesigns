import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import SortApp from './components/SortApp';
import SecondPage from './components/SecondPage';
import reducers from './reducers';
require('../style/style.css');
import styles from '../style/style.css';

<p className="element">hai</p>
const store=createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><SortApp/></Provider>,document.querySelector('.container'));