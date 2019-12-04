import React from "react";
import axios from "axios";

import UserCard from "./UserCard";

class User extends React.Component {
    state = {
        name: "",
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/nasraaden")
        .then(response => {
            console.log(response)
            this.setState({
                name: response.data.name,
                bio: response.data.bio,
                location: response.data.location,
                img: response.data.avatar_url,
                login: response.data.login,
                followers: response.data.followers,
                following: response.data.following,
                repos: response.data.public_repos,
            })
        })
        .catch(err => {
            console.log("THERE IS AN ERROR", err)
        })
    }
    
    render() {
        return (
            <div className="user">
                <UserCard key={this.state.id} name={this.state.name} bio={this.state.bio} img={this.state.img} location={this.state.location} login={this.state.login} followers={this.state.followers} following={this.state.following} repos={this.state.repos} />
            </div>
        )
    }
}

export default User;