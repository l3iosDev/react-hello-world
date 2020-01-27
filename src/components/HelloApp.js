import React from 'react'

function Hello(props) {
  return <h1>Stateless Component {props.name}</h1>
}

export class HelloApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hi</h1>
        <p>{this.props.message}</p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>Total click : {this.state.counter}</p>
        <Hello name="Test" />
      </React.Fragment>
    )
  }
}

export default HelloApp
