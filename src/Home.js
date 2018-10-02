import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
              <Link to="/"></Link>
              <h1>Bienvenue</h1>
            </div>
        );
    }
}

export default Home;