import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MapView from './components/MapView'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/map'>
            <MapView />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
