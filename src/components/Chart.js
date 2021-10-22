import React from 'react'

function Chart(props) {
  return (
    
      <svg
      style={{
        height: 90,
        width: 120,
      }}
    >
      <path
        className="rs-transition rs-path"
        fill="transparent"
        d="M 6 59.99999999999999 A 54 54 0 0 1 114 60"
        strokeWidth={12}
        strokeLinecap="round"
        style={{
          stroke: "rgb(224, 233, 248)",
        }}
      />
      <path
        className="rs-transition rs-range"
        fill="transparent"
        d="M 6 59.99999999999999 A 54 54 0 0 1 114 60"
        strokeWidth={12}
        strokeLinecap="round"
        strokeDashoffset={0.01}
        style={{
          stroke: "rgb(102, 153, 255)",
          strokeDasharray: "0, 0, 0, 169.646",
        }}
      />
      <path
        className="rs-transition rs-border"
        fill="transparent"
        d="M 0 59.99999999999999 A 60 60 0 0 1 120 60 A 1, 1, 0, 0, 1, 108 60 A 48 48 0 0 0 12 59.99999999999999 A 1, 1, 0, 0, 1, 0 59.99999999999999"
        style={{
          strokeWidth: 0,
          stroke: "rgb(102, 153, 255)",
        }}
      />
    </svg>
    
  )
}

export default Chart
