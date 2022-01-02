const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
const ResponseTool = require('./Utils');
const jwt = require('jsonwebtoken');
const multer = require('multer');
var app = express();
app.use(bodyParser.json());
require('./socket');

const upload = multer({dest: './imgs/'})
const articleController = require('./controllers/ArticleController');
const CommonService = require('./services/CommonService');
const commonService = new CommonService();
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




app.all('/actions/*', function (req, res, next) {
    const token = req.headers.authorization || '';
    if (!token) res.send(ResponseTool.no('', '请登录', '300'))
    try {
        var decoded = jwt.verify(token, 'batgggo');
        next();
    } catch (err) {
        res.send(ResponseTool.no('', '请登录', '300'))
    }
})
app.get('/test', async function (req, res, next) {
    res.send("hello docker")
})

app.post('/login', async function (req, res, next) {
    let body = req.body;
    const userInfo = await commonService.login(body);
    if (userInfo === null) {
        res.send(ResponseTool.no('', 'user not found'))
    } else {
        const token = jwt.sign({username: userInfo.username, id: userInfo.id}, 'batgggo', {expiresIn: '24h'});
        res.send(ResponseTool.yes({t: token, u: userInfo.username, i: userInfo.id}, 'Login Successfully'))
    }
})

app.post('/logout', async function (req, res, next) {
    let body = req.body;
    const userInfo = await commonService.login(body);
    jwt.sign({username: userInfo.username, id: userInfo.id}, 'batgggo', {expiresIn: '2h'});
    if (userInfo === null) {
        res.send(ResponseTool.no('', 'user not found'))
    } else {
        const token = jwt.sign({username: userInfo.username, id: userInfo.id}, 'batgggo', {expiresIn: '2h'});
        res.send(ResponseTool.yes(token, 'Login Successfully'))
    }
})


app.get('/image-store/*', async function (req, res, next) {
    const imgid = req.params[0];
    const file = path.join(__dirname, './imgs/' + imgid);
    res.download(file);
})

app.post('/actions/uploadImage', upload.single('image'), async function (req, res, next) {
    let file = req.file;
    if (file.size > 1.5 * 1024 * 1024) {
        res.send(ResponseTool.no('', '图片不能大于1.5M'));
    } else {
        res.send(ResponseTool.yes(file.filename, '图片上传成功'));
    }
})

app.use(articleController);

app.listen(8000, function () {
    console.log('express Ready')
})
