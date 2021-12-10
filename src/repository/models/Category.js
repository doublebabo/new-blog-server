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
    parent_id: {
        type: DataTypes.INTEGER
    },
    sort: {
        type: DataTypes.INTEGER
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
