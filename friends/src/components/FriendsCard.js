import React from "react";

const FriendsCard = ({friend}) => {
    console.log(friend);

    

    return(
        <div className="card">
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
        </div>
    )
}

export default FriendsCard;