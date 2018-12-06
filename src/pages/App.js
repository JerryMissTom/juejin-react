import React, { Component } from 'react';
import styles from'./App.css';
import Header from '../components/header/header';
import { Route, Link, NavLink } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <nav style={{ marginTop: 100 }}>
          <ul className='navlist'>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about" activeClassName="hurray">
                React
</NavLink>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
