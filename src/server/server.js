import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../../webpack.config';
import bodyParser from 'body-parser';

const app = express();
// TODO: use process.env
const port = 3000;

// webpack
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  path: config.output.path
}));
app.use(require('webpack-hot-middleware')(compiler));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Render static index route
app.use(express.static(path.join(__dirname, '../client')));
require('./routes.js')(app);

app.listen(port, () => { 
  console.log(`server.js has been served on port: ${port}`); 
});
