import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import FriendsCard from "./FriendsCard.js";

const FriendList = () => {
    const [ friends, setFriends ] = useState([])
    const [ newFriend, setNewFriend ] = useState({
        name:'',
        age: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log('FriendsList.js axiosWithAuth has an error!', err.response))
    }, [])

    
    
    const handleChanges = e => {
        e.preventDefault();
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
        console.log(newFriend);

    }

    const handleSubmit = e => {
        
        e.preventDefault();
        
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
                setFriends(res.data);
                setNewFriend({
                    name:'',
                    age: '',
                    email: ''
                })
            })
            .catch(err => console.log(`post friends error from inside the AddFriendForm.js`, err.response));
    }

    return (
        <div>
            <div>
                <form className="form-style" onSubmit={handleSubmit}>
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
            <div className="friends-container">
                {friends.map(friend => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}

export default FriendList;