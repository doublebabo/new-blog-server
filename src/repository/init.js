const {Sequelize, DataTypes, Model, Op} = require('sequelize');
const config = require('./../config');

const sequelize = new Sequelize(config.db.name, config.db.username, config.db.psd, {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: (...msg) => console.log(msg)
});

module.exports = {sequelize, DataTypes, Model, Op};
