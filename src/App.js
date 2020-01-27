import React from 'react'
import './App.css'

import HelloApp from './components/HelloApp'
import MyStatelessComponent from './components/MyStatelessComponent'

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HelloApp message="this is message sent from app" />
        <MyStatelessComponent title="Stateless" message="Example of Stateless Component" />
      </React.Fragment>
    )
  }
}

export default App
