import React, { Component } from 'react';
import logo from './logo.svg';
import chromHead from "./chromHead.png";
import foxHead from "./foxHead.png";
import vs from "./vs.png";
import './App.css';

import { compose } from 'react-apollo';

import { HashRouter as Router, withRouter, Link } from "react-router-dom";

//appollo,8base dependencies
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';

//custom templates
import { NameForm } from '../src/objects'

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

const withCreatePlayer = graphql(CREATE_PLAYER_MUTATION, {
  options: {
    context: {
      headers: {
        "Authorization": "bearer 2e916e3b-acba-4aba-8151-38dc17c23bbe"
      }
    }
  },
  props: ({ mutate }) => ({
    createPlayer: ({ username, fname, lname, wins, lost }) => {
      mutate({
        variables: { data: { username, fname, lname, wins, lost } },
        refetchQueries: [{ query: GET_PLAYER_QUERY }]
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

  state = { username: "" };
  render() {
    const { createPlayer } = this.props;

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
              {/* 
                <NameForm>

                </NameForm> */}
              <input
                className="new-todo"
                onChange={({ target }) =>
                  this.setState(({ text }) => ({ text: target.value }))
                }
                onKeyPress={({ key }) => {
                  if (key === "Enter") {
                    createPlayer({ username: this.state.text, fname: "xd", lname: "hi", wins: "0", lost: "0" });
                    this.setState({ text: "" });
                  }
                }}
                value={this.state.text}
                placeholder="What needs to be done?"
              />

            </header>

          </div>
        </div>

        <div id="rightTop">
          <div className="App">
            <header className="App-header">
            <img src={chromHead} className="App-logo" alt="chromHead" />
            </header>

          </div>
        </div>

        <div id="rightBot">
          <div className="App">
            <header className="App-header">
            <img src={foxHead} className="App-logo" alt="foxHead" />
            </header>

          </div>
        </div>
        {/* {this.renderPlayers()} */}

        <div id="rightMid">
          <div className="App">
            <header className="App-header">
            <img src={vs} className="vsresize" alt="vs"/>
            </header>
          </div>
        </div>

        <div id="centerline">
          <div className="App">
            <header className="App-header">
              <p>
              here                
              </p>            
            </header>
          </div>
        </div>

      </div>

    );
  }
}

Header = compose(
  withRouter,
  withPlayers,
  withCreatePlayer

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
