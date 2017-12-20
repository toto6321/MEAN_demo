let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

// import database configuration
require('./APIs/models/db')

// import router
let index = require('./app_server/routes/index')
let users = require('./app_server/routes/users')

// import api router
const apiRouter = require('./APIs/routes/index')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// set angular SPA root path
app.use(express.static(path.join(__dirname, 'app_client')))

// set up routers
// app.use('/', index)
// app.use('/users', users)
// app.use('/api', apiRouter)

// set up angular route
app.use((req, res, next) => {
  res.send(path.join(__dirname, 'app_client', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
