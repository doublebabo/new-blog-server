const commonDao = require('./../repository/daos/CommonDao');

class CommonService {

    getWebsiteLatestComments() {
        return commonDao.query()
    }

    addNewWebsiteComment(params) {
        return commonDao.addNewWebsiteComment(params)
    }

    login(params) {
        return commonDao.login(params);
    }
}
module.exports = CommonService
