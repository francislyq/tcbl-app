import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Container>
        {isAuthenticated
          ? "Home page: authComponent"
          : "Home page: guestComponent"}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Home));
