const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const errorFunction = val =>{
    if (typeof val === 'number') {
        logger.error("Este es un mensaje personalizado de error")
    }
    else(logger.debug("No es un numero"))

};

try {
    errorFunction(5)
}
catch{
logger.info("no pas{o la prueba")
};