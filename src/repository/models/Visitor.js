const {sequelize, DataTypes, Model} = require('../init');

class User extends Model {
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    psd: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.INTEGER
    },
    mobile: {
        type: DataTypes.STRING
    },
    avator: {
        type: DataTypes.STRING
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
    tableName: 'user',
    modelName: 'User',
});

module.exports = User;
