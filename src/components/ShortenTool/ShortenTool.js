import React, { Component } from 'react';

class ShortenTool extends Component {
  constructor() {
    super()
    this.state = {
      longURL: ''
    }
  }

  // METHODS
  handleChange = event => {
    this.setState({
      longURL: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      longURL: ''
    })
  }


  render() {
    return (
      <div className="shorten-tool">
        <div className="shorten-tool-container">

          <input
            type="text"
            placeholder="Shorten Your Link"
            value={this.state.longURL}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>shorten</button>

        </div>

      </div >
    )
  }
}

export default ShortenTool;