import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authentication";
import { withRouter } from "react-router-dom";
import MyNavbarLinks from "./MyNavbarLinks";

import { Nav, Navbar } from "react-bootstrap";

class MyNavbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav>
        <Nav.Link href="#" onClick={this.onLogout.bind(this)}>
          <img
            src={user.avatar}
            alt={user.name}
            title={user.name}
            className="rounded-circle"
            style={{ width: "25px", marginRight: "5px" }}
          />
          Logout
        </Nav.Link>
      </Nav>
    );
    const guestLinks = (
      <Nav>
        <Nav.Link href="/register">Registration</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    );

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">TCBL Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MyNavbarLinks />
          {isAuthenticated ? authLinks : guestLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

MyNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(MyNavbar));
