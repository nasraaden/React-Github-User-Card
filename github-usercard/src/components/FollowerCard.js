import React from "react";

const FollowerCard = props => {
    return (
        <div className="follower-card">
            <img src={props.img} alt={props.img}/>
            <h3>{`Username: ${props.login}`}</h3>
        </div>
    )
}
export default FollowerCard;