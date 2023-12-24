import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="note-message">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.generateNumber}
            className="generate-button"
          >
            Generate
          </button>
          <p className="generate-number-text">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
