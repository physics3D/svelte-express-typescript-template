import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
app.use('/', express.static(path.join(`${__dirname}/../client/public`)));
const server = new http.Server(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
