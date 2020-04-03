import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import expiryApp from './reducers/index';
import {
    addItem,
    removeItem,
    updateItem
} from './actions'

const store = createStore(expiryApp, composeWithDevTools(

));
const currentState = store.getState();

const unsubscribe = store.subscribe(() => console.log('current State', currentState));

let id = 0;

const food1 = {
    id: id++,
    foodName: 'Cashews',
    foodType: 'Nuts',
    expiryDate: new Date().toDateString()
};

const food2 = {
    id: id++,
    foodName: 'Chia',
    foodType: 'Seeds',
    expiryDate: new Date().toDateString()
}

const food3 = {
    id: id++,
    foodName: 'Spirulina',
    foodType: 'Nutrition Powder',
    expiryDate: new Date().toDateString()
}

const food4 = {
    id: id++,
    foodName: 'Pumpkin Seeds',
    foodType: 'Seeds',
    expiryDate: new Date().toDateString()
}

store.dispatch(addItem(food3));
// store.dispatch(addItem(food4));
// store.dispatch(removeItem(food2));

const newState = store.getState();
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
