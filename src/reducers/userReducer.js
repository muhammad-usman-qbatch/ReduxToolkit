// import {createReducer} from '@reduxjs/toolkit';
// import {updateStatus1} from '../actions'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    name: "usman",
    age: 22,
    status: "Mern Stack Developer"
  };
// export default (state = initialState, action) => {
//     if(action.type == 'UPDATE_AGE'){
//         return {
//             ...state,
//             age : action.payload
//         }
//     }
//     return state
// }

// export default createReducer(initialState, (builder) => {
//     builder.addCase('UPDATE_AGE', (state,action) => {
//         state.age = action.payload;
//     })
//     builder.addCase('UPDATE_NAME', (state,action) => {
//         state.name = action.payload;
//     })
//     builder.addCase(updateStatus1, (state,action) => {
//         state.status = action.payload;
//     })
// });

export const fetchUserName = createAsyncThunk(
    'fetchUserName',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res1 = await res.json();
        return res1[Math.floor(Math.random()*10)].name
    }
)

const userReducer = createSlice({
    name : 'person',
    // initialState : initialState
    initialState,
    reducers : {
        updateName(state, action){
            state.name = action.payload
        },
        updateAge(state, action){
            state.age = action.payload
        },
        updateStatus(state, action){
            state.status = action.payload
        }
    },
    extraReducers:{
        [fetchUserName.fulfilled] : (state, action) => {
            state.name = action.payload
        },
        [fetchUserName.pending] : (state, action) => {
            state.name = 'Loading...'
        },
        [fetchUserName.rejected] : (state, action) => {
            state.name = 'Try again...'
        },
    }
})

export const {updateName, updateAge, updateStatus} = userReducer.actions
export default userReducer.reducer