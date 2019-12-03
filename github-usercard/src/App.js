import React from 'react';

import './App.css';
import User from './components/User';
import Follower from './components/Follower';

function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <User />
      <Follower />
    </div>
  );
}

export default App;
