import React, { Component } from 'react'
import css from 'next/css'

const SPEED = 60

export default class extends Component {
  constructor(props) {
    super(props)

    const data = (props.code || '').split('\n')
    this.state = {
      curr: 0,
      data,
      lines: []
    }

    this.nextTick = this.nextTick.bind(this)
  }

  componentDidMount() {
    this.nextTick()
  }

  nextTick() {
    let {curr, data, lines} = this.state
    while (typeof lines[curr] !== 'undefined'
      && lines[curr].length === data[curr].length) {
      ++curr
    }
    if (curr === data.length) {
      return
    }

    const nextPos = lines[curr] ? lines[curr].length : 0
    lines[curr] = data[curr].slice(0, nextPos + 1)
    this.setState({
      lines: lines
    })

    setTimeout(this.nextTick, SPEED)
  }

  render() {
    const {lines} = this.state
    const lineNumber = lines.length

    return <div {...baseStyle}>
      {
        lines.map((line, index) =>
          <p {...lineStyle} key={`term-line-${index}`}>
            ▲ {line}
            {index + 1 === lineNumber && <span {...cursorStyle}>&nbsp;</span>}
          </p>
        )
      }
    </div>
  }
}

const baseStyle = css({
  margin: 0,
  fontSize: 14,
  fontFamily: 'menlo, "pt mono", consolas, monospace',
  lineHeight: 1.5,
  color: '#bbb',
})

const lineStyle = css({
  margin: 0,
})

const cursorStyle = css({
  display: 'inline-block',
  marginLeft: 3,
  height: '100%',
  background: '#bbb',
  animation: `${css.keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  })} 1.5s ease-in-out infinite`,
})
