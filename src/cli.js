const path = require('path')
const fs = require('fs')

const chalk = require('chalk')

const { init, update } = require('./web')
const ping = require('./ping')

// Default config
let options = {
  silent: false,
  data: []
}

// Logging
const log = (...args) => !options.silent && console.log(chalk.green.bold(' ›'), ...args)
const error = (...args) => !options.silent && console.error(chalk.red.bold(' ›', ...args))

const getConfig = (filename) =>
  new Promise(resolve => fs.readFile(path.resolve(filename), (err, res) => resolve(res)))
    .then(content => JSON.parse(content.toString()))

const exit = () => log('Exiting...')

const startup = (filename = 'default.json') => {
  log('Running pingdash...')

  getConfig(filename).then(conf => {
    log(`Configuration ${filename} loaded.`)
    // overwrite default options
    Object.assign(options, conf)

    init(options)
    ping(options, update, log, error)

  }).catch(err => {
    error(err.message)
  })

  process.on('exit', exit)
  process.on('SIGINT', process.exit)
}

startup()
