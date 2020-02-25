import React from "react";

const FriendsCard = ({friend}) => {
    console.log(friend);

    

    return(
        <div className="card">
            <h1>Name: {friend.name}</h1>
            <h2>Age: {friend.age}</h2>
            <h2>Email: {friend.email}</h2>
        </div>
    )
}

export default FriendsCard;