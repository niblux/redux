export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

// export function addItem({ id, foodName, foodType, expiryDate }) {
//     console.log('payload in action', id, foodName, foodType, expiryDate);
//     return {
//         type: ADD_ITEM, payload: {
//             id,
//             foodName,
//             foodType,
//             expiryDate
//         }
//     }
// }

export function addItem(payload) {
    return {
        type: ADD_ITEM, payload
    }
}



export function removeItem(payload) {
    return { type: REMOVE_ITEM, payload }
}

export function updateItem(payload) {
    return { type: UPDATE_ITEM, payload }
}
