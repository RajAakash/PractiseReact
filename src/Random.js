import React, { Component } from 'react'
import HighScore from './HighScore'

export class Random extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      overTen: false,
    }
  }

  handleClick = () => {
    console.log('clicked')
    this.setState({ count: this.state.count + 1 })
  }

  componentDidUpdate(props, state) {
    //yesma state change garna mildaina
    //10 vayepaxi state change garna khojda error aauxa
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      console.log('OverTen is True')
      this.setState({ overTen: true })
    }
    // state change from {count:2} to {count:3}
    // console.log('Updated from state', state, 'to this.state', this.state)
  }
  resetCount = (e) => {
    console.log('event', e)
    this.setState({ count: 0, overTen: false })
  }

  render() {
    return (
      <div className='First'>
        <h1>The count is {this.state.count}</h1>
        <HighScore
          overTen={this.state.overTen}
          onReset={(e) => this.resetCount()}
        />
        <span>
          <button onClick={() => this.handleClick()}>Click me</button>
        </span>
      </div>
    )
  }
}

export default Random
