var app = require('./app/app')
  , winston = require('winston')
  , logger;

// Logger
exports.logger = logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({filename: "./log/" + (NODE_ENV || 'development') + ".log"})
  ]
});

if (NODE_ENV == 'development' || NODE_ENV == 'test'){
  logger.add( new winston.transports.Console() );
};

// run HTTP Server
exports.app = app.run({
    port: parseInt(process.argv[2] || 3000, 10)
  , home: process.cwd()
  , logger: logger
});
