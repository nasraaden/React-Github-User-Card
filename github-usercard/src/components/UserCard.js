import React from "react";

const UserCard = props => {
    return (
        <div>
            <img src={props.img} />
            <h2>{props.name}</h2>
            <p>{`Bio: ${props.bio}`}</p>
            <p>{` Location: ${props.locations}`}</p>
        </div>
    )
}
export default UserCard;