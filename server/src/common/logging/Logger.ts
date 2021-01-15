import pino from 'pino';
import expressPino from 'express-pino-logger';

const logger = pino({
    // Only use these in dev because it will slow down the performance of app
    level: 'debug',
    prettyPrint: true,
});
const expressLogger = expressPino({ logger });
export { logger, expressLogger };
