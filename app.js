require('dotenv').config();

const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');





const app = express();

const port = process.env.PORT || 3000; 

app.use (bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');

const routes = require('./routes/home');

app.use('/', routes);


app.listen(port, () => console.log(`Server startan na portu ${port}`));