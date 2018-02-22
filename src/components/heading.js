import React from "react"

export default ({ children }) =>
  <div
    style={
      {
        paddingTop: '0.95in',
        paddingLeft: '0.6in',
        paddingRight: '0.9in',
        display: 'flex',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)'
      }
    }>
    {children}
  </div>
