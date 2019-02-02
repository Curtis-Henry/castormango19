import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Forms from './Forms'
import Brackets from './Brackets'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /Brackets
// and /forms routes will match any pathname that starts
// with /Brackets or /forms. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/forms' component={Forms}/>
      <Route path='/brackets' component={Brackets}/>
    </Switch>
  </main>
)

export default Main
