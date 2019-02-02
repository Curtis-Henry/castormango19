import React from 'react'
import { Switch} from 'react-router-dom'
import logo from './logo.svg';

// The Brackets component matches one of two different routes
// depending on the full pathname
const Brackets = () => (
  <Switch>
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

      <div id="rightMid">
        <div class="center">
          <div className="App">
            <header className="App-header">
              <p>
                TEST
                    </p>
            </header>

          </div>
        </div>
      </div>

    </div>
  </Switch>
)

export default Brackets
