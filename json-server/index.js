import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('./json-server/db.json');

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
