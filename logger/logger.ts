import { createLogger, format, transports } from "winston";

export const logger = createLogger ({
	transports: [
		new transports.Console({
			format: format.combine(format.colorize()),
		}),
		new transports.File({
			dirname: "dir",
			filename: "winston_example.log",
			format: format.combine(format.json()),
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
