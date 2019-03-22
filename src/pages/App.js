import React, { Component } from 'react';
import styles from './App.scss';
import Header from '../components/Header/index';
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import ActivityPage from './Activity/Activity';
import BooksPage from './Books/Books';
import EventsPage from './Events/Events';
import TopicPage from './Topic/Topic';

const routes = [{
  path: '/',
  component: Home,
  exact: true,
},
{
  path: '/activities',
  component: ActivityPage,
  exact: true,
},
{
  path: '/books',
  component: BooksPage,
  exact: true,
},
{
  path: '/topics',
  component: TopicPage,
  exact: true,
},
{
  path: '/events',
  component: EventsPage,
  exact: true,
}]

class App extends Component {


  componentDidMount() { }

  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          {
            routes.map(item => (<Route key={item.path} path={item.path} exact={item.exact} component={item.component} />))
          }
        </Switch>
      </div >
    );
  }
}

export default App;
