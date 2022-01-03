const express = require('express')
const router = express.Router()
const fs = require('fs');
const ArticleServices = require('./../services/ArticleService');
const CategoryServices = require('./../services/CategoryService');
const CommonService = require('./../services/CommonService');
const ResponseTool = require('./../Utils');

const articleServices = new ArticleServices();
const categoryService = new CategoryServices();
const commonService = new CommonService();

const jwt = require('jsonwebtoken');
var util = require('util');
const path = require('path');
router.post('/articles', async function (req, res, next) {
    res.send(ResponseTool.yes(await articleServices.list(req.body)) || []);
});

router.post('/article', async function (req, res, next) {
    try {
        res.send(ResponseTool.yes(await articleServices.getArticle({id: req.body.id})))
    } catch (e) {
        res.send(ResponseTool.no(null,e))
    }
});

router.post('/getCategories', async function (req, res, next) {
    res.send(ResponseTool.yes(await categoryService.getCategories()) || [])
});

// 获取推荐文章
router.post('/getRecommendArticles', async function (req, res, next) {
    res.send(ResponseTool.yes(await articleServices.list({pageSize: 5})) || [])
});

// 获取网站留言记录
router.post('/getWebsiteLatestComments', async function (req, res, next) {
    res.send(ResponseTool.yes(await commonService.getWebsiteLatestComments()) || [])
});

// 新增网站留言记录
router.post('/addNewWebsiteComment', async function (req, res, next) {
    res.send(ResponseTool.yes(await commonService.addNewWebsiteComment(req.body)))
});

router.post('/actions/publishArticle', async function (req, res, next) {
    let body = req.body;
    res.send(ResponseTool.yes(await articleServices.publishArticle(body)))
});

router.post('/actions/saveArticleAsDraft', async function (req, res, next) {
    let body = req.body;
    res.send(ResponseTool.yes(await articleServices.saveArticleAsDraft(body)))
});

router.post('/actions/updateArticleAndPublish', async function (req, res, next) {
    let body = req.body;
    res.send(ResponseTool.yes(await articleServices.updateArticleAndPublish(body)))
});

router.post('/actions/updateDraft', async function (req, res, next) {
    let body = req.body;
    res.send(ResponseTool.yes(await articleServices.updateDraft(body)))
});
router.post('/actions/deleteArticle', async function (req, res, next) {
    let body = req.body;
    const [count] = await articleServices.deleteArticle(body)
    if (count === 1) {
        res.send(ResponseTool.yes('', '删除成功'));
    } else {
        res.send(ResponseTool.no('', '出错聊'));
    }
});


module.exports = router;
