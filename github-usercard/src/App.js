import React from 'react';
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";

import './App.css';
import User from './components/User';
import Follower from './components/Follower';

function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/followers"><button>Followers</button></Link>
      <Route exact path="/" component={User} />
      <Route path="/followers" component={Follower} />
    </div>
  );
}

export default App;
