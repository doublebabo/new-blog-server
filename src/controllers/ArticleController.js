const express = require('express')
const router = express.Router()
const ArticleServices = require('./../services/ArticleService');
const CategoryServices = require('./../services/CategoryService');
const CommonService = require('./../services/CommonService');

const articleServices =new ArticleServices();
const categoryService =new CategoryServices();
const commonService =new CommonService();
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

router.post('/articles', async function (req, res, next) {
    res.send(await articleServices.list(req.body))
    next();
});

router.post('/article', async function (req, res, next) {

    res.send(await articleServices.getArticle({id: req.body.id}))
    next();
});

router.post('/publishArticle',async function (req, res, next) {
    let body = req.body;
    res.send(await articleServices.publishArticle(body))
    next();
})


router.post('/saveArticleAsDraft',async function (req, res, next) {
    let body = req.body;
    res.send(await articleServices.saveArticleAsDraft(body))
    next();
})


router.post('/getCategories',async function (req, res, next) {
    res.send(await categoryService.getCategories())
    next();
})

// 获取推荐文章
router.post('/getRecommendArticles',async function (req, res, next) {
    res.send(await articleServices.list({pageSize: 5}))
    next();
})

// 获取网站留言记录
router.post('/getWebsiteLatestComments', async function (req, res, next) {
    res.send(await commonService.getWebsiteLatestComments())
    next();
});

// 新增网站留言记录
router.post('/addNewWebsiteComment', async function (req, res, next) {
    res.send(await commonService.addNewWebsiteComment(req.body))
    next();
});

module.exports = router;
