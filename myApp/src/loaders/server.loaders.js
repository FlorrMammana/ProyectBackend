// modules
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const logger = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
// routes
const routes = require('../routes/index');


const responseDefinition = (req, res, next) => {
  res.success = (data = null, status = 200) => {
    return res.status(status).send({
      success: true,
      error: {
        code,
        message
      },
      data: null,
    });
  };

  return next();
};

const errorHandler = (err, req, res, next) => {
  // development error handler print stacktrace
  // production error handler no stacktraces leaked to user
  return res.status(err.status || 500).send({
    error: ("development" === 'development') ? err : {},
    message: err.message || 'Unknown Error'
  });
};

module.exports = {
  create() {
    // create express app
    const server = express();

    server.set('json spaces', 2);
    server.use(logger('dev'));
    // helment security lib
    server.use(helmet());
    // disable server banner header
    server.disable('x-powered-by');
    // compress middleware to gzip content
    server.use(compression());
    // server.use(favicon(`${ __dirname }/public/img/favicon.png`));
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    // sanitize user-supplied data
    server.use(mongoSanitize({ replaceWith: '_' }));

   
    let corsVerify = true
    if (corsVerify) {
      server.use(cors());
    }

    // response definition
    server.use(responseDefinition);
    // error handler
    server.use(errorHandler);

    // routes
    routes.initialize(server);

    // catch 404 and forward to error handler
    server.use((req, res) => res.failure(-1, 'not found', 404));

    return server;
  },

  async start(server) {
    server.set('port', 8080); // firing up express

    await http.createServer(server).listen(8080);
    return console.log(`[+] webapp server listening on port 8080`);
  }
};