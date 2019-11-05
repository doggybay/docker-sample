const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const PORT = 8080
const HOST = '0.0.0.0'

const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const todos = require('./routes/todosRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/todos', todos);

// app.listen(port, function() {
//   console.log("listening on port: ", port);
// })

app.listen(PORT, HOST, function () {
  console.log(`Running on  http://${HOST}:${PORT}`)
  
})

