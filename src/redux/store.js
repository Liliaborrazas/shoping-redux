import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//En el store siempre llamaremos a todos los reducers

import shopingReducer from './shopingDoc'

//Si tenemos varios reducers, que va a ser casi siempre, aqui vamos a combinarlos.

const rootReducer = combineReducers({
    productsList : shopingReducer
    // list: pepeListReducer,
    // user: pepeUser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}