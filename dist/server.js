import express from 'express';
import { createServer } from 'http';
import { handler } from './build/handler.js';
import { backend } from './backend.js';

const app = express();
app.use(handler);

const httpServer = createServer(app);
backend(httpServer);
httpServer.listen(3000, () => {
	console.log('Listening on port 3000');
});
