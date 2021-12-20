const Visitor = require('./../models/Visitor');
module.exports = {
    addNewVisitor: async function (params) {
        const visitor = await Visitor.findOne({
                attributes: ['ip','id','location', 'createTime'],
                where: {
                    ip: params.ip
                }
            }
        )
        if (!visitor) {
            return Visitor.create({
                location: params.location,
                ip: params.ip,
            });
        } else {
            return Visitor.update({
                ip: params.ip
            },{
                where: {
                    ip: params.ip
                }
            });
        }
    },
}
