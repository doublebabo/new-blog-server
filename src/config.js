module.exports = {
    db: {
        name: 'blog',
        host: process.env.NODE_ENV === 'production' ? '106.15.189.73:33060' : 'localhost',
        dialect: 'mysql',
        username: 'root',
        psd: 'admin#123'
    }
}
