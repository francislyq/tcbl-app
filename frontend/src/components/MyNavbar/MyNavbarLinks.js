import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Nav } from "react-bootstrap";

class MyNavbarLinks extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    const homeLink = <Nav.Link href="/">Home</Nav.Link>;
    const gameLink = <Nav.Link href="/game">Game</Nav.Link>;

    return (
      <Nav className="mr-auto">
        {isAuthenticated ? homeLink : null}
        {isAuthenticated ? gameLink : null}
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(MyNavbarLinks));
