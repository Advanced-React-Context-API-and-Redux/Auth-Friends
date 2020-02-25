import React, { useState, useEffect } from "react";
// import FriendsCard from "./FriendsCard.js";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const Friend = (props) => {
    console.log(props);

    const [ person, setPerson ] = useState();
    const { id } = useParams();
    const [ editing, setEditing ] = useState(false);
    const [ updateFriend, setUpdateFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    console.log(Array.isArray(person));
    
    useEffect(() => {
        axiosWithAuth()
            .get(`friends/${id}`, id)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err => console.log(`There was an error retrieving that friend`, err))
    }, [id])

    const handleChanges = e => {
        e.preventDefault();
        setUpdateFriend({ ...updateFriend, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`friends/${id}`, updateFriend)
            .then(res => {
                console.log(res)
                props.history.push('/people')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const update = () => {
        setEditing(!editing);
    }

    return (
            <div>
                {person === undefined ? (
                    <h1>Your state of person is undefined, go back and check it</h1>
                ) : (editing === true) ? (
                    <div>
                        <form className="form-style" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                label="name"
                                placeholder="name"
                                value={updateFriend.name}
                                onChange={handleChanges}
                                className="input"
                            />
                            <input
                                type="text"
                                name="age"
                                label="age"
                                placeholder="age"
                                value={updateFriend.age}
                                onChange={handleChanges}
                                className="input"
                            />
                            <input
                                type="text"
                                name="email"
                                label="email"
                                placeholder="email"
                                value={updateFriend.email}
                                onChange={handleChanges}
                                className="input"
                            />
                            <button className="btn-style">Add Friend</button>
                        </form>
                    </div>
                ) : (
                    <div className="card">
                    <h1>{person.name}</h1>
                    <h2>{person.age}</h2>
                    <h2>{person.email}</h2>
                    <button onClick={update}>Update Friend</button>
                    </div>
                )}
        </div>
    )
}

export default Friend;
