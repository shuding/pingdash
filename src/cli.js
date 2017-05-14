const path = require('path')
const fs = require('fs')

const chalk = require('chalk')
const program = require('commander')

const { init, update } = require('./web')
const ping = require('./ping')

// Default config
let options = {
  silent: false,
  data: []
}

// Logging
const info = (...args) => !options.silent && console.log(' ›', ...args)
const log = (...args) => !options.silent && console.log(chalk.green.bold(' ›'), ...args.map(arg => chalk.green(arg.toString())))
const error = (...args) => !options.silent && console.error(chalk.red.bold(' ›', ...args))

const getConfig = (filename) =>
  new Promise(resolve => fs.readFile(path.resolve(filename), (err, res) => resolve(res)))
    .then(content => JSON.parse(content.toString()))

const exit = () => info('Exiting...')

const startup = (filename = 'default.json', {silent, port}) => {
  getConfig(filename).then(conf => {
    info(`Config file ${filename} loaded.`)
    // overwrite default options
    Object.assign(options, conf)

    // overwrite cli options
    if (typeof silent !== 'undefined') {
      options.silent = silent
    }
    if (typeof port !== 'undefined') {
      options.port = port
    }

    if (!options.silent) {
      info('Running pingdash...')
    }

    init(options)
    ping(options, update, log, error, info)

  }).catch(err => {
    error(err.message)
  })

  process.on('exit', exit)
  process.on('SIGINT', process.exit)
}

let filename = process.argv[process.argv.length - 1]

program
  .version('0.1.3')
  .usage('[options] <config file>')
  .action((filename, config) => {
    startup(filename.match(/.json$/) ? filename : undefined, config)
  })
  .option('-p, --port <port>', 'server\'s listen port, 3000 default')
  .option('-s, --silent', 'don\'t output any logs')
  .parse(process.argv)
