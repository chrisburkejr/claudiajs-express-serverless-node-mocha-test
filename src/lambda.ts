import awsServerlessExpress from 'aws-serverless-express';
const appLambda = require('./server');
const binaryMimeTypes = [
	'application/octet-stream',
	'font/eot',
	'font/opentype',
	'font/otf',
	'image/jpeg',
	'image/png',
	'image/svg+xml'
];
const server = awsServerlessExpress.createServer(appLambda, null, binaryMimeTypes);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);