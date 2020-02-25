import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { Link } from "react-router-dom";

const FriendsCard = ({friend}) => {
    console.log(friend);

    const removeFriend = e => {
        console.log(e);

        axiosWithAuth()
            .delete(`friends/${friend.id}`, friend.id)
            .then(res => console.log(res.data))
            .catch(err => console.log(`There was an error deleting, try again!`, err.response))
    }

    return(
        <div className="card">
                <button onClick={removeFriend}>X</button>
                <Link to={`people/${friend.id}`}>
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                </Link>
        </div>
    )
}

export default FriendsCard;