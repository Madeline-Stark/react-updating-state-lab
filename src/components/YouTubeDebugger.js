// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })

  }
//Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag
//Can only return one jsx element from a render
//but that element can have children
  render() {
    return (
      <div>
      <button
        className='bitrate'
        onClick={this.handleBitrateClick}
      />
      <button
        className='resolution'
        onClick={this.handleResolutionClick}
      />
    </div>
    )
  }
}
