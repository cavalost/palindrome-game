const app = require('./src/app');

const { PORT = '3000' } = process.env;

const server = app.listen(PORT, () => {
	const { port } = server.address();
	console.log('Server', process.pid, 'listening on port', port);
});
