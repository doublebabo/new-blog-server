const express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
const articleController = require('./controllers/ArticleController');

app.all('*', (req, res, next) => {

    // const { origin, Origin, referer, Referer } = req.headers;
    // const allowOrigin = origin || Origin || referer || Referer || '*';
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", 'Express');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(articleController);

app.listen(8000, function () {
    console.log('Ready')
})
