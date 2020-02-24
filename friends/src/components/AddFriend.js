import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const AddFriend = () => {
    const [ newFriend, setNewFriend ] = useState({
        name:'',
        age: '',
        email: ''
    })
    
    const handleChanges = e => {
        e.preventDefault();
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                setNewFriend(res.data);
                e.props.history.push('/friends')
            })
            .catch(err => console.log(`post friends error from inside the AddFriendForm.js`, err.response))
        
        setNewFriend({
            name:'',
            age: '',
            email: ''
        })
    }

    return (
        <div>
            <h1>Hello from the AddFriend.js file</h1>
            <form className="forms-style" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    label="name"
                    placeholder="name"
                    value={newFriend.name}
                    onChange={handleChanges}
                    className="input"
                />
                <input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="age"
                    value={newFriend.age}
                    onChange={handleChanges}
                    className="input"
                />
                <input
                    type="text"
                    name="email"
                    label="email"
                    placeholder="email"
                    value={newFriend.email}
                    onChange={handleChanges}
                    className="input"
                />
                <button className="btn-style">Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;