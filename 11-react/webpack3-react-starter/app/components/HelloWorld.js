import React from 'react'
import './HelloWorld.scss'

export default function HelloWorld(props) {
  return <div className="beautiful">hello {props.name}</div>
}