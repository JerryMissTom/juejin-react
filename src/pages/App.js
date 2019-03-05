import React, { Component } from 'react';
import styles from './App.scss';
import Header from '../components/header/index';
import { Route, Switch } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {


  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        {/* <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch> */}
      </div >
    );
  }
}

export default App;
