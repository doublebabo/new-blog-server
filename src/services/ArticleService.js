const articleDao = require('./../repository/daos/ArticleDao');

class ArticleServices {
    getArticlesByTag() {

    }

    list(query) {
        return articleDao.query(query)
    }

    getArticlesByCategory(query) {
        return articleDao.queryByCategory(query)
    }

    getArticle(query) {
        return articleDao.getArticle(query)
    }

    getArticleAndAddViews() {

    }

    listNewArticles() {

    }

    publishArticle(params) {
        return articleDao.publishArticle(params);
    }

    saveArticleAsDraft(params) {
        return articleDao.saveArticleAsDraft(params);
    }

    updateArticleAndPublish(params) {
        return articleDao.updateArticleAndPublish(params);
    }

    updateDraft(params) {
        return articleDao.updateDraft(params);
    }

    deleteArticle(params) {
        return articleDao.deleteArticle(params);
    }
}

module.exports = ArticleServices
