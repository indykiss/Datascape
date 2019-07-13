import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import ScapeReducer from './reducers/ScapeReducer';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

const store = createStore(
    // I pass in the reducer, which is returning the store
    ScapeReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);


// index js gets rendered to index.html under public. delete views folder.
// Instead of views, UI goes to index.html
