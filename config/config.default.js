// config/config.default.js
exports.keys = "cookie.keys";
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: '//127.0.0.1:7001/news',
};
// 添加sequelize配置
// config.sequelize = {
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   database: 'egg-sequelize-doc-default',
//   username: 'root',
//   password: 'w123456',
// }