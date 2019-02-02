const routes = require('next-routes')();

routes
    .add('/','index')
    .add('/admin','adminPage')
    .add('/hospitals','hospital');

module.exports = routes;