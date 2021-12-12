const Common = require('./../models/Common');
const User = require('./../models/User');
module.exports = {
    query: function (query = {}) {
        // {pagesize: ,pageindex页码: ,}
        // offset = (pageIndex - 1) * pagesize
        const limit = query.pageSize || 10;
        const offset = ((query.pageIndex || 1) - 1) * limit;
        let where = {

        }
        return Common.findAll({
            attributes: ['id', 'username', 'message', 'likes', 'ip', 'createTime', 'updateTime'],
            where: where,
            offset,
            limit,
            order: [
                ['createTime', 'DESC'],
            ]
        });
    },

    addNewWebsiteComment: function (params) {
        return Common.create({
            username: params.username,
            message: params.message,
            ip: params.ip || '',
        });
    },


    login: function (params) {
        let where = params.email ? {
            email: params.email,
            username: params.username
        } : {
            psd: params.psd,
            username: params.username
        }
        return User.findOne({
            attributes: ['id', 'username','email','gender','avator'],
            where: where
        });
    }
}

