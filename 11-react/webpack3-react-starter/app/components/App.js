import React from 'react'
import HelloWorld from './HelloWorld'
import Slider from './Slider'
import Bar from './Bar'
import LikeButton from './LikeButton'
import TweetBox from './TweetBox'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <TweetBox />
    </div>
  }

}
