const {sequelize, DataTypes, Model} = require('../init');

class Common extends Model {
}

Common.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    },
    ip: {
        type: DataTypes.STRING
    },
    likes: {
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
    tableName: 'global_comments',
    modelName: 'Common',
});

module.exports = Common;
