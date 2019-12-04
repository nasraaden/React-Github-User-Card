import React from "react";

const UserCard = props => {
    return (
        <div className="user-card">
            <img src={props.img} alt={props.img}/>
            <h3>{props.name}</h3>
            <p>{`Username: ${props.login}`}</p>
            <p>{`Bio: ${props.bio}`}</p>
            <p>{` Location: ${props.location}`}</p>
        </div>
    )
}
export default UserCard;