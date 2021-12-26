const commonDao = require('./../repository/daos/CommonDao');
const VisitorDao = require('./../repository/daos/VisitorDao');

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

    addNewVisitor(params) {
        return VisitorDao.addNewVisitor(params);
    }
}
module.exports = CommonService
