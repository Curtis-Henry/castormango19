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

const GET_PLAYER_COUNT_QUERY = gql`
query getPlayers{
  playersList{
    count
  }
}
`;

const getCount = graphql(GET_PLAYER_COUNT_QUERY,{
  props:({data:{playersList:({ count } = {} ) } }) =>
  {
    return{
      totCount: count || 0
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
  props: ({ mutate }) => ({
    createPlayer: ({ username, fname, lname, wins, lost }) => {
      mutate({
        variables: { data: { username, fname, lname, wins, lost } },
        refetchQueries: [{ query: GET_PLAYER_QUERY }]
      });
    }
  })
})

const CREATE_BRACKET_MUTATION = gql`
mutation CREATE_BRACKET_MUTATION($data: BracketCreateInput!)
{
  bracketCreate(data: $data)
  {
    round
    match
    players {
      items {
        username
      }
    }
  
  }
}
`;

const withCreateBracket = graphql(CREATE_BRACKET_MUTATION,{
  props: ({mutate}) => ({
    createBracket:({round,match,players}) => {
      mutate({
        variables:{data:{round,match,players: { connect: players }}},
        refetchQueries: [{ query: CREATE_BRACKET_MUTATION }]

      })
    }
  })
})


class Header extends Component {
  renderPlayers() {
    let i = 0;
    const brackets = [];
    let playerCopy = this.props.players;
    let currentBracket = [];
    for(;i<this.props.totCount;i++)
    {
      console.log(i)
    }
    

  }
          
  

  state = { username: "", fname: "", lname: "", wins: "", lost: ""};
  
  randomizePLayers() {
    ///randomlogic
this.props.players

  
  }
  
  render() {
    const { createPlayer, playersWithBrackets } = this.props;

    return (
      
      <div class="fullpage">
        {this.renderPlayers()}
        {/* {console.log(Math.floor(Math.random() * (this.props.totCount -1 - 0 + 1)) + 0)} */}

        <div id="left">
          <div className="App">
          
            <header className="App-header">
            <img src={bracket} className="App-logo" alt="braket" />
              <NameForm createPlayer={createPlayer} />
              <button onClick={() => this.randomizePLayers()}>random</button>
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
  // withPlayerBrackets,
  withCreatePlayer,
  withCreateBracket,
  getCount

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
