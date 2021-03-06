const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const product = require("./app/product");
const categories = require('./app/categories');
const users = require('./app/users');
const config =  require("./config");

const port = 8000;
const app = express();

mongoose.connect(config.db.url + '/' + config.db.name, {useNewUrlParser: true });
const db = mongoose.connection;
mongoose.set('useCreateIndex', true);


app.use(cors());
app.use(express.static('public'));
app.use(express.json());

db.once('open', () => {
    app.use('/products', product);
    app.use('/categories', categories());
    app.use('/users', users());
    app.listen(port, () => console.log(`Server started on ${port}`));
});





