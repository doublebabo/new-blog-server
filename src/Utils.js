module.exports = class ResponseTool {
    static yes(data, msg) {
        return {
            data: data || "",
            msg: msg || '',
            code: '200'
        }
    }

    static no(data, msg,code) {
        return {
            data: data || "",
            msg: msg || '',
            code: code || '500'
        }
    }

}
