import React, { Component } from 'react';
import logo from './logo.svg';
import chromHead from "./chromHead.png";
import foxHead from "./foxHead.png";
import vs from "./vs.png";
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
            <img src={bracket} className="App-logo" alt="braket" />

              {/* CALLS OBJECTS.js */}
              {/* <NameForm createPlayer={createPlayer} /> */}
              {/* CALLS OBJECTS.js */}

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
          
  
  
  
           {/* START MATT CODE.js */}
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
                <img src={vs} className="vsresize" alt="vs" />
              </header>
            </div>
          </div>
  
          <div id="centerline">
            <div className="App">
              <header className="App-header">
              </header>
            </div>
          </div>
           {/*END MATT CODE.js */}
  
        </div>
  
      );
    }
  }