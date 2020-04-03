import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import expiryApp from './reducers';
import {
    addItem,
    removeItem,
    updateItem
} from './actions'

const store = createStore(expiryApp);
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

store.dispatch(addItem(food3));
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
