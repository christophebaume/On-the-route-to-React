import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
              <Link to="/notre-histoire"></Link>
               <h1>Notre Histoire</h1>
            </div>
        );
    }
}

export default History;