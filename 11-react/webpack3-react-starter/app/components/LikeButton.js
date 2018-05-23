import React from 'react'

export default class LikeButton extends React.Component {

  constructor(props) {
    super(props)
    // in here the this keyword still refers to the component 
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: 0
    }
  }

  handleClick(event) {
    // the this keyword is not referring to the component ??? why??? 
    // this.state.count = this.state.count + 1 dont do this!!!
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState((prevState, props) => {
      return { count: prevState + 1 }
    })
  }

  render() {
    return <div>
      <button onClick={this.handleClick}>Like</button>
      <span>{this.state.count}</span>
    </div>
  }
}