const express = require('express')
const router = express.Router()
const ArticleServices = require('./../services/ArticleService');

const service =new ArticleServices();
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

router.post('/articles',async function (req, res, next) {
    res.send(await service.list(req.body))
    next();
})

router.post('/article',async function (req, res, next) {
    res.send(await service.getArticle({id:req.body.id}))
    next();
})

router.post('/publishArticle',async function (req, res, next) {
    let body = req.body;
    res.send(await service.publishArticle(body))
    next();
})


router.post('/saveArticleAsDraft',async function (req, res, next) {
    let body = req.body;
    res.send(await service.saveArticleAsDraft(body))
    next();
})

module.exports = router;
