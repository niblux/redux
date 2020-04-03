export const ADD_ITEM = 'ADD_FOOD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export function addItem(payload) {
    console.log('payload in action', payload);
    return { type: ADD_ITEM, payload }
}

export function removeItem(payload) {
    return { type: REMOVE_ITEM, payload }
}

export function updateItem(payload) {
    return { type: UPDATE_ITEM, payload }
}
