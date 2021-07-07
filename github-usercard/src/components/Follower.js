import React from "react";
import axios from "axios";

import FollowerCard from "./FollowerCard";

class Follower extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/nasraaden/followers")
        .then(response => {
            console.log(response.data)
            this.setState({
                followers: response.data
            })
        })
        .catch(err => {
            console.log("THERE IS AN ERROR", err)
        })
    }

    

    render() {
        return (
            <div>
                <h2>Followers</h2>
                <div className="followers">
                    {this.state.followers.map(follower => (
                    <FollowerCard key={follower.id} login={follower.login} img={follower.avatar_url} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Follower;