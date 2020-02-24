import React from "react";

const FriendsCard = ({ friend }) => {
    // console.log(props);
    console.log(friend);

    const { name, age, email } = friend;

    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default FriendsCard;