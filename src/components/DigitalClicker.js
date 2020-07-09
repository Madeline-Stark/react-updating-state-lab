// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    //this was undefined in debugger, but works in console.log
    // console.log(this.state)
    //SHOULD HAVE USED PREV STATE HERE B/C SET STATE IS ASYNC
    handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }
    
//     this.setState({
//       timesClicked: this.state.timesClicked + 1 //++ caused issue
//     })
//   }

  // handleClick = () => {
  //   let timesClicked = this.state.timesClicked + 1
  //   this.setState({
  //     timesClicked: timesClicked
  //   })
  // }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    )
  }
}
