import React, { Component } from 'react';
import logo from './logo.svg';
import chromHead from "./chromHead.png";
import foxHead from "./foxHead.png";
import vs from "./vs.png";
import bracket from "./bracket.png";
import './App.css';

import { compose } from 'react-apollo';

import { HashRouter as Router, withRouter, Link } from "react-router-dom";

//appollo,8base dependencies
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { ApiTokenAuthClient } from '@8base/api-token-auth-client';

//custom templates
import { NameForm } from '../src/objects'
import { from } from 'zen-observable';

const GET_PLAYER_BRACKETS_QUERY = gql`
  query getPlayerBrackets($username: String!){
    playersList(filter: {username: {equals: $username}}) {
      items{
        brackets{
          items{
            round
            match
        }
      }
    }
  }
}
`;

const withPlayerBrackets = graphql(GET_PLAYER_BRACKETS_QUERY, {
  props: ({ data: { playersList: ({ items } = {}) } }) => {
  return {
    playersWithBrackets: items || []
  };
},
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

  state = { username: "", fname: "", lname: "", wins: "", lost: "" };
  render() {
    const { createPlayer, playersWithBrackets } = this.props;

    return (

      <div class="fullpage">
        {/* {this.renderPlayers()} */}


        <div id="bracketSpace">
          <div className="App">
          
            <header className="App-header">
            <img src={bracket} className="App-logo" alt="braket" />
              <NameForm createPlayer={createPlayer} />
            </header>

          </div>
        </div>

        <div id="playerTop">
          <div className="App">
            <header className="App-header">
            <img src={chromHead} className="App-logo" alt="chromHead" />
            </header>

          </div>
        </div>

        <div id="playerBot">
          <div className="App">
            <header className="App-header">
            <img src={foxHead} className="App-logo" alt="foxHead" />
            </header>

          </div>
        </div>
        {/* {this.renderPlayers()} */}

        <div id="vsField">
          <div className="App">
            <header className="App-header">
            <img src={vs} className="vsresize" alt="vs"/>
            </header>
          </div>
        </div>

        <div id="centerline">
          <div className="App">
            <header className="App-header">         
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
  // withPlayerBrackets,
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

const authClient = new ApiTokenAuthClient({
  apiToken: '2e916e3b-acba-4aba-8151-38dc17c23bbe',
});



export default App;
