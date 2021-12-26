const {sequelize, DataTypes, Model} = require('../init');

class Visitor extends Model {
}

Visitor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ip: {
        type: DataTypes.STRING
    },
    location: {
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
    tableName: 'visitor',
    modelName: 'Visitor',
});

module.exports = Visitor;
