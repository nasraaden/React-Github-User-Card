import React from "react";

const FollowerCard = props => {
    return (
        <div>
            <img src={props.img} />
            <h2>{`Username: ${props.login}`}</h2>
            <p>{`Github Page: ${props.url}`}</p>
        </div>
    )
}
export default FollowerCard;