const routes = require('next-routes')();

routes
    .add('/','index')
    .add('/hospitals','adminPage')
    .add('/addhospitals','hospital');

module.exports = routes;