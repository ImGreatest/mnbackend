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
			filename: "info.winston.log",
			format: format.combine(format.json()),
			level: 'info',
		})
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
