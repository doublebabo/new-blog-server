const {sequelize, DataTypes, Model} = require('../init');

class Category extends Model {
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    parentId: {
        type: DataTypes.INTEGER,
        field: 'parent_id'
    },
    sort: {
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
    tableName: 'category',
    modelName: 'Category',
});


module.exports = Category;
