import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';

const { isEmpty } = require('lodash');

class DisplayUser extends Component {

  render() {
    const allUsers = this.props.users;
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
                <TableCell align='right'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({ _id, name, position, company }, key) => (
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
                  <TableCell align='right'>
                    <Button data-id={_id}
                      onClick={this.props.handleClick}
                      variant='contained'
                      size='small'
                      color='secondary'>
                      x
                    </Button>
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