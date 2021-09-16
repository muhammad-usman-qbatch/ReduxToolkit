// export default (status) => {
//     return {
//         type : 'UPDATE_STATUS',
//         payload : status
//   }
// }

import {createAction} from '@reduxjs/toolkit'

export const updateStatus1 = createAction('UPDATE_STATUS');

export const changeName = () => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();
        dispatch({
            type : 'UPDATE_NAME',
            payload : result[0].name
        })
    }
}
console.log('actions.js')