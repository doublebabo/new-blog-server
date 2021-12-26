const {sequelize, DataTypes, Model} = require('../init');

class Article extends Model {
}

Article.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    abstract: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    clicks: {
        type: DataTypes.INTEGER
    },
    categoryId : {
        type: DataTypes.INTEGER,
        field: 'category_id'
    },
    commentCounts: {
        type: DataTypes.INTEGER,
        field: 'comment_counts'
    },
    draft: {
        type: DataTypes.INTEGER
    },
    deleted: {
        type: DataTypes.INTEGER
    },
    createTime: {
        type: DataTypes.STRING,
        field: 'create_time'
    },
    updateTime: {
        type: DataTypes.STRING,
        field: 'update_time'
    },
}, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    sequelize,
    tableName: 'article',
    modelName: 'Article',
});


module.exports = Article;
