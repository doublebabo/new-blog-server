const Category = require('./../models/Category');
module.exports = {
    query: async function (query = {}) {
        return await Category.findAll({
            attributes: ['id', 'name', 'parentId', 'sort'],
            where: {
                deleted: 0
            },
        });
    },
}

