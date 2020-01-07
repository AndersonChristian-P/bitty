import React, { Component } from 'react';
import ShortenTool from "../ShortenTool/ShortenTool"

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        Jello!!!!!
        <ShortenTool />
      </div>
    )
  }
}

export default Home;