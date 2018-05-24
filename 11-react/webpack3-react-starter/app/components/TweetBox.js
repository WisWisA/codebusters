import React from 'react'
import './Tweetbox.scss'
import SvgBar from './SvgBar'

const secret = 42

export default class TweetBox extends React.Component {

  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      content: ''
    }
  }

  handleTextChange(event) {
    event.persist();
    this.setState((prevState, props) => {
      return { content: event.target.value }
    })
  }

  render() {
    const { content } = this.state

    const charsLeft = 100 - content.length
    const spanClassName = (charsLeft < 20) ? 'tweetbox__span--warning' : ''
    const isDisabled = content.length == 0 || content.length > 100

    return (
      <div className="tweetbox">
        <SvgBar 
          value={charsLeft}
          maxValue={100} 
          colorNormal="lime"
          colorWarning="red"
          />
        <textarea className="tweetbox__textarea" onChange={this.handleTextChange}></textarea>
        <footer className="tweetbox__footer">
          <span className={spanClassName}>{100 - content.length}</span>
          <button className="tweetbox__button" disabled={isDisabled}>Tweet</button>
        </footer>
      </div>
    )
  }

}