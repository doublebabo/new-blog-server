const categoryDao = require('./../repository/daos/CategoryDao');

class ArticleServices {
    async publishArticle(params) {
        return await articleDao.publishArticle(params);
    }

    async saveArticleAsDraft(params) {
        return await articleDao.saveArticleAsDraft(params);
    }

    updateArticle() {

    }
}

module.exports = ArticleServices
