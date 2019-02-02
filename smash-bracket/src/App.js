import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, withRouter, Link } from "react-router-dom";

//appollo,8base dependencies
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';

//authenticator requirements
const ENDPOINT_URL = 'YOUR_8BASE_ENDPOINT_URL'
const AUTH_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH_DOMAIN = 'auth.8base.com';

const authClient = new WebAuth0AuthClient({
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/auth`,
});

class Header extends Component {
  state = { text: "" };
  render() {
    const { createTodo } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>

      </header>
    );
  }
}

class App extends Component {

  render() {
    return (
      <Router>
        <EightBaseAppProvider uri={ENDPOINT_URL} authClient={authClient} >
          {({ loading }) => loading ? <div>"Loading..."</div> : (
            <div className="todoapp">
              {<Header />/*
              <Main />
              <Footer /> */}
            </div>
          )}
        </EightBaseAppProvider>
      </Router>
    );
  }
}

export default App;
