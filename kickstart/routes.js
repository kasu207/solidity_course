const routes = require('next-routes')();

routes
        .add('/campaigns/new', '/campaigns/new')
        .add('/campaigns/:address', '/campaigns/show')  // ":" es kommt danach was --> wildcard
        .add('/campaigns/:address/requests', '/campaigns/requests/index')
        .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;