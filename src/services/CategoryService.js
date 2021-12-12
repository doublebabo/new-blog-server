const categoryDao = require('./../repository/daos/CategoryDao');

class CategoryService {

    getCategories() {
        return categoryDao.query()
    }
}
module.exports = CategoryService
