'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show') // ":" es kommt danach was --> wildcard
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNTLEFBRFQsSUFDYSxBQURiLGtCQUMrQixBQUQvQixrQkFFUyxBQUZULElBRWEsQUFGYix1QkFFb0MsQUFGcEMsbUJBRXdELEFBRnhEO0NBR1MsQUFIVCxJQUdhLEFBSGIsZ0NBRzZDLEFBSDdDLDZCQUlTLEFBSlQsSUFJYSxBQUpiLG9DQUlpRCxBQUpqRDs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1BoaWxpcHAvRHJvcGJveC9Qcm9ncmFtbWluZy9Tb2xpZGl0eV9UdXRvcmlhbC9TbWFydENvbnRyYWN0X1VkZW15X0NvdXJzZS9raWNrc3RhcnQifQ==