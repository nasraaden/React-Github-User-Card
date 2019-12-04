import React from "react";

const FollowerCard = props => {
    return (
        <div className="follower-card">
                <img src={props.img} alt={props.img}/>
                <h3>{`Username: ${props.login}`}</h3>
                <p>{`Github Page: ${props.url}`}</p>
        </div>
    )
}
export default FollowerCard;