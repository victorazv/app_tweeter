const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://victor:core2duo@ds157853.mlab.com:57853/goweek-backend-victor', 
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('subiu');
});