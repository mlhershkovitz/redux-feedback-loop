import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let reduxState = {feeling: '', understanding: '', support: '', comments: '' }
const mainReducer = (state = reduxState, action) => {
    if (action.type === 'UPDATE_FEELING') {
        return {...state, feeling: action.payload};
    }
    else if (action.type === 'UPDATE_UNDERSTANDING') {
        return {...state, understanding: action.payload};
    }
    else if (action.type === 'UPDATE_SUPPORT') {
        return {...state, support: action.payload};
    }
    else if (action.type === 'UPDATE_COMMENTS') {
        return {...state, comments: action.payload};
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        mainReducer
    }),    
);


ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
