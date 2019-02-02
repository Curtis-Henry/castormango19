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
const ENDPOINT_URL = 'https://api.8base.com/cjrmz7id2003z01qpx8xvw75v'
const AUTH_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH_DOMAIN = 'auth.8base.com';

const authClient = new WebAuth0AuthClient({
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/auth`,
});

const GET_PLAYER_QUERY = gql`
query getPlayers{
  playersList{
    items{
      username
    }
  }
}
`;

const withPlayers = graphql(GET_PLAYER_QUERY, {
  props: ({ data: { playersList: ({ items } = {}) } }) => {
  return {
    players: items || []
  };
},
});

class Header extends Component {
  render() {
    return (
      <div class="fullpage">
        <div id="left">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Current Match Info Here
                </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
                </a>
            </header>

          </div>
        </div>

        <div id="rightTop">
          <div className="App">
            <header className="App-header">
              <p>
              Player 1
                </p>
            </header>

          </div>
        </div>

        <div id="rightBot">
          <div className="App">
            <header className="App-header">
              <p>
                Player 2
                </p>
            </header>

          </div>
        </div>
      </div>

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
