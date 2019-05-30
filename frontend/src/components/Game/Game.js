import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

class Game extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return <Container>123</Container>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Game));
