import React from 'react'
import css from 'next/css'

export default props =>
  <h1 {...css(baseStyle, expandStyle)}>pingdash</h1>

const baseStyle = css({
  margin: '0 0 .5em 0',
  fontWeight: 'medium',
  transition: 'all .3s ease',
})

const expandStyle = css({
  fontSize: 24,
})

const collapsedStyle = css({
  fontSize: 24,
})
