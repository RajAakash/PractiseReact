import React, { Component } from 'react'

export class HighScore extends Component {
  render() {
    if (this.props.overTen) {
      return (
        <div>
          <h1>Beat high score of 10</h1>
          <button
            onClick={(e) => {
              this.props.onReset(e)
            }}
          >
            Reset
          </button>
        </div>
      )
    } else {
      return null
    }
  }
}

export default HighScore
