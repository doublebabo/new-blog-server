const Article = require('./../models/Article');
module.exports = {
    query: function (query = {}) {
        // {pagesize: ,pageindex页码: ,}
        // offset = (pageIndex - 1) * pagesize
        const limit = query.pageSize || 10;
        const offset = ((query.pageIndex || 1) - 1) * limit;
        const categoryId = query.categoryId;
        let where = {
            draft: 0
        }
        if (categoryId) {
            where.category_id = categoryId
        }
        return Article.findAll({
            attributes: ['id', 'name', 'author', 'abstract', 'clicks', 'createTime', 'commentCounts'],
            where: where,
            offset,
            limit
        });
    },
    queryByCategory: async function (query) {
        const limit = query.pageSize || 10;
        const offset = ((query.pageIndex || 1) - 1) * limit;
        const categoryId = query.id;
        return await Article.findAll({
            attributes: ['id', 'name', 'author', 'abstract', 'clicks', 'createTime', 'commentCounts'],
            where: {
                categoryId: categoryId
            },
            offset: offset, limit: limit
        })
    },

    getArticle: async function (query) {
        const id = query.id;
        let a = await Article.findOne({
            attributes: ['id', 'name', 'author', 'content', 'clicks', 'createTime', 'commentCounts'],
            where: {
                id: id,
                draft: 0,
            }
        });
        a.clicks++;
        a.save();
        return a;
    },

    saveArticleAsDraft: function (params) {
        return Article.create({
            name: params.name,
            author: params.author,
            content: params.content,
            abstract: params.abstract,
            categoryId: params.categoryId || 0,
            clicks: 1,
            draft: 1,
        });
    },

    publishArticle: function (params) {
        return Article.create({
            name: params.name,
            author: params.author,
            content: params.content,
            abstract: params.abstract,
            categoryId: params.categoryId || 0,
            clicks: 1,
            draft: 0,
        });
    },
}

