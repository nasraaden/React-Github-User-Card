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
            })
        })
        .catch(err => {
            console.log("THERE IS AN ERROR", err)
        })
    }
    
    render() {
        return (
            <div>
                <UserCard key={this.state.id} name={this.state.name} bio={this.state.bio} img={this.state.img} location={this.state.location}/>
            </div>
        )
    }
}

export default User;