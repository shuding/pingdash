import React from 'react'
import css from 'next/css'
import 'glamor/reset'

export default ({children}) =>
  <div className={baseStyle}>
    <div className={style}>{children}</div>
  </div>

const baseStyle = css({
  minHeight: '100vh',
  padding: 10,
  fontFamily: '"Quicksand", sans-serif',
  color: '#fff',
  overflow: 'auto',
  boxSizing: 'border-box',
  fontSmoothing: 'antialiased',
  WebkitFontSmoothing: 'antialiased',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#F4E2D8',
    background: 'linear-gradient(45deg, #16BFFD , #CB3066)',
    zIndex: -2,
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    borderRadius: 3,
    background: '#111',
    zIndex: -1,
  },
})

const style = css({
  margin: '10px 20px',
  overflow: 'auto',
})
