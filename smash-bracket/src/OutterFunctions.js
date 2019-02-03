import React, { Component } from 'react';
import logo from './logo.svg';
import chromHead from "./chromHead.png";
import foxHead from "./foxHead.png";
import vs from "./vs.png";
import vsWhite from "./vsWhite.png";

import bracket from "./bracket.png";
import './App.css';

export class OutsideHeader extends Component {

  // state = { username: "", fname: "", lname: "", wins: "", lost: "" };
  render() {
    //   const { OutsideHeader} = this.props;
    return (

      <div class="fullpage">
        {/* {this.renderPlayers()} */}

        <div id="bracketSpace">
          <div className="App">

            <header className="App-header">
              {/* <NameForm createPlayer={createPlayer} /> */}
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

        <div id="playerTopLabel">
          <div className="App">
            <header className="App-header">
              <p>
                1234567890
              </p>
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

        <div id="playerBotLabel">
          <div className="App">
            <header className="App-header">
              <p>
                1234567890
              </p>
            </header>
          </div>
        </div>
        {/* {this.renderPlayers()} */}
        
        <div id="vsField">
          <div className="App">
            <header className="App-header">
              {/* <img src={vs} className="vsresize" alt="vs" /> */}
              <img src={vsWhite} className="vsresize" alt="vsWhite" />
            </header>
          </div>
        </div>

        <div id="bracketBox1">
          <div className="App">
            <header className="bracketBoxes">
              <p>
                1234567890
              </p>
            </header>
          </div>
        </div>

      </div>

    );
  }
}