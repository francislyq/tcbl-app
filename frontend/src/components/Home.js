// Home.js

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    return <div>{isAuthenticated ? "authComponent" : "guestComponent"}</div>;
  }
}

// Home.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(Home));
