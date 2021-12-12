const express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


const articleController = require('./controllers/ArticleController');
const CommonService = require('./services/CommonService');

const commonService =new CommonService();

const jose = require('jose')

// const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
//     .setProtectedHeader({ alg: 'ES256' })
//     .setIssuedAt()
//     .setIssuer('urn:example:issuer')
//     .setAudience('urn:example:audience')
//     .setExpirationTime('2h')
    // .sign(privateKey)

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

app.post('/login',async function (req, res, next) {
    let body = req.body;
    // console.log(await commonService.login(body))
    res.send(await commonService.login(body))
    next();
})

app.use(articleController);

app.listen(8000, function () {
    console.log('Ready')
})
