import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {updateStatus1, changeName} from '../actions'
import {updateName, updateAge, updateStatus, fetchUserName} from '../reducers/userReducer'

function Profile() {
    const {name, age, status} = useSelector((state ) => {
        return state;
    })

    const dispatch = useDispatch();

    // const updateName1 = (name) => {
    //     dispatch(updateName(name));
    // }
    const updateName1 = () => {
        dispatch(fetchUserName());
    }
    const updateAge1 = (age) => {
        dispatch(updateAge(age));
    }
   
    const updateStatus1 = (status) => {
        dispatch(updateStatus(status));
    }

     // const updateAge = (age) => {
    //     dispatch({
    //         type : 'UPDATE_AGE',
    //         payload : age
    //     })
    // }

    // const updateName = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const result = await res.json();
    //     dispatch({
    //         type : 'UPDATE_NAME',
    //         payload : result[0].name
    //     })
    // }

    // const updateName = () => {
    //     dispatch(changeName());
    // }

    // const updateStatus = (status) => {
    //     dispatch({
    //         type : 'UPDATE_STATUS',
    //         payload : status
    //     })
    // }

    // const updateStatus = (status) => {
    //     dispatch(updateStatus1(status))
    // }

    return (
        <div>
            <h1>I am {name}.</h1>
            <h2>My age is {age}.</h2>
            <h2>I am a {status}.</h2>
            <button onClick = {()=>updateAge1(40)}>Update Age</button>
            <button onClick = {()=>updateName1()}>Update Name</button>
            <button onClick = {()=>updateStatus1('Data Engineer')}>Update Status</button>
        </div>
    )
}

export default Profile
