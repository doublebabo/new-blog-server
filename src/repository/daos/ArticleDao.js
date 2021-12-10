const Article = require('./../models/Article');
module.exports = {
    query: function (query = {}) {
        // {pagesize: ,pageindex页码: ,}
        // offset = (pageIndex - 1) * pagesize
        const limit = query.pageSize || 10;
        const offset = ((query.pageIndex || 1) - 1) * limit;
        return Article.findAll({
            attributes: ['id', 'name', 'author', 'abstract', 'clicks','create_time', 'comment_counts'],
            where: {
                draft: 0
            },
            offset,
            limit
        });
    },
    queryByCategory: async function (query) {
        const limit = query.pageSize || 10;
        const offset = ((query.pageIndex || 1) - 1) * limit;
        const categoryId = query.id;
        return await Article.findAll({
            attributes: ['id', 'name', 'author', 'abstract', 'clicks', 'create_time','comment_counts'],
            where: {
                categoryId: categoryId
            },
            offset: offset, limit: limit
        })
    },

    getArticle: function (query) {
        const id = query.id;
        return Article.findOne({
            attributes: ['id', 'name', 'author', 'content', 'clicks', 'create_time','comment_counts'],
            where: {
                id: id,
                draft: 0
            },
        })
    },

    saveArticleAsDraft: async function (params) {
        return await Article.create({
            name: params.name,
            author: params.author,
            content: params.content,
            category_id: params.category_id || 0,
            clicks: 2,
            draft: 1,
        });
    },

    publishArticle: async function (params) {
        return await Article.create({
            name: params.name,
            author: params.author,
            content: params.content,
            category_id: params.category_id || 0,
            clicks: 2,
            draft: 0,
        });
    },
}

