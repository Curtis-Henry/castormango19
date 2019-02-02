import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, withRouter, Link } from "react-router-dom";

//appollo,8base dependencies
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';

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
  options: {
    context: {
      headers: {
        "Authorization": "bearer 2e916e3b-acba-4aba-8151-38dc17c23bbe"
      }
    }
  },
  props: ({ data: { playersList: ({ items } = {}) } }) => {
  return {
    players: items || []
  };
},
});

const CREATE_PLAYER_MUTATION = gql`
  mutation PlayerCreate($data: PlayerCreateInput!){
	playerCreate(data: $data){
    username
    fname
    lname
    wins
    lost
    
  }
}
`;

const withCreatePlayer = graphql(CREATE_PLAYER_MUTATION,{
  props:({mutate}) => ({
    createPlayer: ({username,fname,lname,wins,lost}) => {
      mutate({
        variables:{data: {username,fname,lname,wins,lost}},
        refetchQueries:[{query:GET_PLAYER_QUERY}]
      });
    }
  })
})



class Header extends Component {
  renderPlayers() {
    return this.props.players.map((player) => {
      return <p>{player.username}</p>
    })
  }
  // state = { text: "" };
  render() {
    console.log(this.props)
    return (
      
      <div class="fullpage">
      {/* {this.renderPlayers()} */}
        <div id="left">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Bracket Here
                </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >

                players => pl

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
        {/* {this.renderPlayers()} */}
      </div>

    );
  }
}

Header = compose(
  withRouter,
  withPlayers

)(Header);

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

export default App;
