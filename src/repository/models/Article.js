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
    content: {
        type: DataTypes.STRING
    },
    clicks: {
        type: DataTypes.INTEGER
    },
    category_id : {
        type: DataTypes.INTEGER
    },
    comment_counts: {
        type: DataTypes.INTEGER
    },
    draft: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',

    sequelize,
    tableName: 'article',
    modelName: 'Article',
});


module.exports = Article;
