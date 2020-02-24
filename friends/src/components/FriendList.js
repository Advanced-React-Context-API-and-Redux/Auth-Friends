import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import FriendsCard from "./FriendsCard.js";

const FriendList = () => {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log('FriendsList.js axiosWithAuth has an error!', err.response))
    }, [])
    return (
        <div>
            <h1>Hello from the FriendList.js file</h1>
            <Link to="/add-friend">Add Friend</Link>
            <div className="friends-container">
                {friends.map(friend => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}

export default FriendList;