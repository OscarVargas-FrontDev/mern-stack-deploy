import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from "axios";

import './App.css';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios
      .get("/users")
      .then((response) => {
        const { users } = response.data;
        this.props.setState({ users: [...this.props.state.users, ...users] });
      })
      .catch(() => alert("Error fetching new users"));
  };

  addUser = ({ name, position, company }) => {
    this.setState({
      users: [...this.state.users, { name, position, company }],
    });
  };

  render() {
    return (
      <div className='App'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>users</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path='/users'>
            <DisplayUsers users={this.state.users} />
          </Route>
          <Route path='/about'>
            <Form addUser={this.addUser} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
