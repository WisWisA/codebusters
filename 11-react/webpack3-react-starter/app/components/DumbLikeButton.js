import React from 'react'

// component - standalone lego block
export default function DumbLikeButton(props) {
  return <div>
    <button onClick={props.onLike}>Like!</button> {props.count}
  </div>
}
