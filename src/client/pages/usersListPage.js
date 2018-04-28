import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../actions/index';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({id, name}) =>
      <li key={id}>{name}</li>
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users App</title>
          <meta property="og:title" content="Users App"/>
        </Helmet>
        List of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

const loadData = (store) => store.dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};
