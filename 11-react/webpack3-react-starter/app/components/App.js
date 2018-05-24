import React from 'react'
import HelloWorld from './HelloWorld'
import Slider from './Slider'
import Bar from './Bar'
import LikeButton from './LikeButton'
import TweetBox from './TweetBox'
import DumbLikeButton from './DumbLikeButton'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    // this.handleLike = this.handleLike.bind(this)
    // this.handleAddTask = this.handleAddTask.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleRemove = this.handleRemove.bind(this)
    this.state = {
      tasks: ['have breakfast', 'have brunch', 'have a snack'],
      newTaskValue: ''
    }
  }

  handleLike = (e) => {
    this.setState({
      likeCount: this.state.likeCount + 2
    })
  }

  handleAddTask = (e) => {
    e.preventDefault()
    const { tasks, newTaskValue } = this.state
    // try to best to write immutable code - make copies
    // const newTasks = tasks.slice(0) // make a copy of the array
    // newTasks.push(newTaskValue)

    this.setState((prevState, props) => {
      return {
        tasks: [...tasks, newTaskValue]
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({ newTaskValue: e.target.value })
  }

  handleRemove = (index) => {
    const { tasks } = this.state
    // first remove elem at index
    this.setState({
      tasks: tasks.filter((task, i) => i !== index)
    })
  }

  render() {
    const { tasks } = this.state

    return <div>
      <form>
        <input onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleAddTask}>add</button>
      </form>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task} 
            <button onClick={() => this.handleRemove(index)}>X</button>
          </li>
        })}
      </ul>
    </div>
  }

}
