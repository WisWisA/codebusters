
import React from 'react'
import './Bar.scss'

export default function Bar({ width, color }) {

  const barStyle = {
    width: width || '0%',
    backgroundColor: color || 'yellow'
  }

  return <div className="bar-wrapper">
    <div style={barStyle} className="bar">
    </div>
  </div>
}