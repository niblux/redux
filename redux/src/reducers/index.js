import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../actions';
// import { combineReducers } from 'redux';


let id = 0;

const initialState = {
    items: [
        {
            id: id++,
            foodName: 'Cashews',
            foodType: 'Nuts',
            expiryDate: new Date().toDateString()
        },
        {
            id: id++,
            foodName: 'Chia',
            foodType: 'Seeds',
            expiryDate: new Date().toDateString()
        }
    ]
}

function items(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state.slice(0, action.id),
                action.payload,
                ...state.slice(action.id)
            ]
        case REMOVE_ITEM:
            return state.filter(item => item.id === action.id);
        case UPDATE_ITEM:
            return [state.items.map((item) => {
                let updatedItem = { ...item };
                if (item.id === action.id) return Object.assign({}, item, action.payload);
                return updatedItem
            })];
        default:
            return state;
    }
}

function expiryApp(state = initialState, action) {
    return { items: items(state.items, action) }
}

// const expiryApp = combineReducers({ items })

export default expiryApp; 
