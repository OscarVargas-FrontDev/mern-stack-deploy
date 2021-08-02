import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from "axios";

import './App.css';

class App extends Component {
  state = {
    users: [],
  };

  handleClick = (e) =>{
    e.preventDefault();
    const id = e.target.parentNode.getAttribute("data-id");
    console.log(id);
    axios
      .delete(process.env.REACT_APP_API_URI + "/users", {
        //"http://localhost:8080/users" Desarrollo en Local
        params: { id },
      })
      .then((response) => {
        console.log(response);
      });
  }

  componentDidMount = () => {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios
      .get(process.env.REACT_APP_API_URI +"/users") //"http://localhost:8080/users" Desarrollo en Local
      .then((response) => {
        const { users } = response.data;
        this.setState({ users: [...this.state.users, ...users] });
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
        <Form addUser={this.addUser} />
        <DisplayUsers handleClick={this.handleClick} users={this.state.users} />
      </div>
    );
  }
}

export default App;
