const {Sequelize, DataTypes, Model, Op} = require('sequelize');
const config = require('./../config');

const sequelize = new Sequelize(config.db.name, config.db.username, config.db.psd, {
    host: process.env.NODE_ENV === 'production' ? 'db' : config.db.host,
    // host: 'db',
    dialect: config.db.dialect,
    // logging: (...msg) => console.log(m≤sg)
    logging: console.log,
    port: process.env.NODE_ENV === 'production' ? 3306 : 33060,
});

module.exports = {sequelize, DataTypes, Model, Op};
