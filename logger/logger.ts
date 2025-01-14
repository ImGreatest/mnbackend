import { createLogger, format, transports } from "winston";

export const logger = createLogger ({
	transports: [
		new transports.Console({
			format: format.combine(format.colorize()),
		}),
		new transports.File({
			dirname: "logs",
			filename: "error.winston.log",
			format: format.combine(format.json()),
			level: 'error',
		}),
		new transports.File({
			dirname: "logs",
			filename: "verbose.winston.log",
			format: format.combine(format.json()),
			level: 'verbose',
		}),
		new transports.File({
			dirname: "logs",
			filename: "info.winston.log",
			format: format.combine(format.json()),
			level: 'info',
		}),
		new transports.File({
			dirname: "logs",
			filename: "debug.winston.log",
			format: format.combine(format.json()),
			level: 'debug',
		}),
		new transports.File({
			dirname: "logs",
			filename: "silly.winston.log",
			format: format.combine(format.json()),
			level: 'silly',
		}),
	],
	format: format.combine(
		format.colorize(),
		format.timestamp(),
		format.printf(({timestamp, level, message}) => {
      return `[${timestamp}] ${level}: ${message}`;
		}),
	),
	defaultMeta: {
		service: "Main Service",
	},
});
