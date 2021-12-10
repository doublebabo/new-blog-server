const Category = require('./../models/Category');
module.exports = {
    query: async function (query = {}) {
        return await Category.findAll({
            where: {
                deleted: 0
            },
        });
    },
}

