const routes = require('next-routes')();

routes
        .add('/campaigns/new', '/campaigns/new')
        .add('/campaigns/:address', '/campaigns/show');  // ":" es kommt danach was --> wildcard

module.exports = routes;