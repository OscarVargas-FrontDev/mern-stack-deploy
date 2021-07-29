import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import axios from "axios";

const { isEmpty } = require('lodash');



class DisplayUser extends Component {

  fetchUsers = () => {
    axios
      .get("/users")
      .then((response) => {
        const { users } = response.data;
        this.props.setState({ users: [...this.props.state.users, ...users] });
      })
      .catch(() => alert("Error fetching new users"));
  };

  render() {
    const allUsers = this.props.state.users;
    const users = !isEmpty(allUsers) ? allUsers : [];

    return (
      <div className='users'>
        {!isEmpty(users) ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Company</TableCell>
                <TableCell align='right'>Position</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({ name, position, company }, key) => (
                <TableRow key={key}>
                  <TableCell component='th' scope='row'>
                    {" "}
                    {name ? name : "No Name Found"}{" "}
                  </TableCell>
                  <TableCell align='right'>
                    {company ? company : "No Company Found"}
                  </TableCell>
                  <TableCell align='right'>
                    {position ? position : "No Position Found"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div>
            <p>No hay elementos</p>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayUser;
