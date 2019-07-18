const express = require('express');
const bodyParser = require ('body-parser')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const homeHelp = require('./routes/help');
const bookRouter = require('./routes/book');
const adminRouter = require('./routes/admin');
const ordersRouter = require('./routes/orders');

const sequelize = require('./configs/sequelize');

const Book = require('./models/book');
const Orders = require('./models/orders');
const Admins = require('./models/admin');

app.use('/',homeRouter);
app.use('/',homeHelp);
app.use('/book', bookRouter);
app.use('/account', adminRouter);
app.use('/order', ordersRouter);

app.listen(3211, () => {
    console.log('server started');
    sequelize.sync();
})
