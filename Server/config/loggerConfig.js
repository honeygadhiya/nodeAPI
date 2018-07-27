var winston = require('winston');

winston.configure({
    transports: [
      new (winston.transports.File)({ filename: 'logger.log' }),
      new (winston.transports.Console)
    ]
  });