import React from "react";


const UserCard = props => {
    return (
        <div className="user-card">
            <img src={props.img} alt={props.img}/>
            <div className="user-info">
                <h3>{props.name}</h3>
                <p>{`Username: ${props.login}`}</p>
                <p>{`Bio: ${props.bio}`}</p>
                <p>{` Location: ${props.location}`}</p>
                <p>{` Followers: ${props.followers}`}</p>
                <p>{` Following: ${props.following}`}</p>
                <p>{` Repos: ${props.repos}`}</p>
            </div>
        </div>
    )
}
export default UserCard;