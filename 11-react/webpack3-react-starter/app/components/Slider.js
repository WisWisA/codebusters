import React from 'react'

export default class Slider extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: this.props.startValue || 0
    }
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value 
    })
  }

  render() {
    return <div>
      <input
        onChange={this.handleChange} 
        value={this.state.value}
        type="range" 
        min="0" 
        max="10" 
        step="1" />
      <input
        onChange={this.handleChange}
        value={this.state.value} 
        type="text" />
    </div>
  }

}