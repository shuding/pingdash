const path = require('path')

const liveServer = require('live-server')

let data = {}

// middlewares
const injectData = title => {
  data.title = title

  return (req, res, next) => {
    if (req.method === 'GET') {
      if (req.url === '/data.json') {
        return res.end(JSON.stringify(data))
      }
    }
    next()
  }
}

const init = options => {
  let defaults = Object.assign({
    port: 3000,
    host: '0.0.0.0',
    title: 'Pingdash'
  }, options)

  let override = {
    root: path.resolve('public'),
    open: false,
    wait: 0,
    logLevel: 0,
    middleware: [injectData(defaults.title)]
  }

  liveServer.start(Object.assign(defaults, override))
}

const update = newData => {
  Object.assign(data, newData)
}

module.exports = {
  init,
  update
}
