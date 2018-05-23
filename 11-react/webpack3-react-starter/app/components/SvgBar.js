import React from 'react'
import './SvgBar.scss'

export default function SvgBar({ value, maxValue, colorNormal, colorWarning }) {

  const calcPercentageValue = (value, maxValue) => {
    if (value <= 0) return 0
    return Math.round(value / maxValue * 100)
  }

  const valInPercent = calcPercentageValue(value, maxValue)
  const barFill = valInPercent < 20 ? colorWarning : colorNormal

  return <svg className="svg-bar" viewBox="0 0 100 2">
    <rect 
      style={{ fill: barFill }}
      className="svg-bar__rect"
      x="0" 
      y="0" 
      width={valInPercent} 
      height="2" /> 
  </svg>
}