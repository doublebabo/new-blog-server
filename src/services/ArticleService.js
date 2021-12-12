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

    async publishArticle(params) {
        return await articleDao.publishArticle(params);
    }

    async saveArticleAsDraft(params) {
        return await articleDao.saveArticleAsDraft(params);
    }
}

module.exports = ArticleServices
