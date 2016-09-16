// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

import * as api from './backend/api';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// APP_PORT, APP_ENV, APP_SSL
const env = process.env.NODE_ENV || process.env.APP_ENV, port = (parseInt(process.env.APP_PORT, 10) || 9002), ssl = (parseInt(process.env.APP_SSL, 10) || 0);

// Express View
import { main } from './main.node';
app.engine('.html', createEngine({ main }));
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use('/tools', express.static(path.join(__dirname, '../tools'), {maxAge: 30}));
app.use('/templates', express.static(path.join(__dirname, '../templates'), {maxAge: 30}));
app.use('/images', express.static(path.join(__dirname, '../images'), {maxAge: 30}));
app.use('/examples', express.static(path.join(__dirname, '../examples'), {maxAge: 30}));
app.use('/files', express.static(path.join(__dirname, '../files'), {maxAge: 30}));
app.use(express.static(path.join(ROOT, 'dist/client'), {index: false}));


// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', (req, res) => res.render('index', {req, res}));
//app.get('/about', (req, res) => res.render('index', {req, res}));
//app.get('/about/*', (req, res) => res.render('index', {req, res}));
//app.get('/home', (req, res) => res.render('index', {req, res}));
//app.get('/home/*', (req, res) => res.render('index', {req, res}));

//app.get('/', ngApp);
app.get('/web_get_img_data', api.emptyImage);
app.get('/test', api.test);
app.get('/logout', api.logout);
app.post('/login', api.login);
app.get('/xml-export-seznam', api.xmlExportSeznam);
app.get('/xml-export-heureka', api.xmlExportHeureka);
app.get('/sitemap', api.sitemap);
app.get('/partners', api.partnersList);
app.get('/user', api.user);

app.get('/:code', (req, res) => res.render('index', {req, res}));
app.get('/load-objects/redirect/:code', api.loadObjects);
app.get('/redirect-navigations/page/:id', api.redirectNavigations);
app.get('/redirect-navigations/product/:code', api.redirectNavigationsProduct);
app.get('/products/:code', api.getProduct);
app.get('/products/list/:code', api.productsList);
app.get('/products/list/:code/pagination', api.productsListPagination);
app.get('/product/:id/attachments/type/:type/table/:tableName', api.attachments);
app.get('/product/:id/similar', api.productsSimilar);
app.get('/filter/:code/type/:type', api.getFilterForList);
app.get('/filter/type/:code', api.getFilterType);
app.get('/cats/:code', api.category);
app.get('/attachments/:id', api.attachment);
app.get('/files/**', api.emptyImage);
app.get('/newsletter/login/:email', api.newsletterLogin);


app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

// Server
let server = app.listen(port, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
