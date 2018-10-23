'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show'); // ":" es kommt danach was --> wildcard

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNTLEFBRFQsSUFDYSxBQURiLGtCQUMrQixBQUQvQixrQkFFUyxBQUZULElBRWEsQUFGYix1QkFFb0MsQUFGcEMsQSxvQkFFeUQ7O0FBRXpELE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUGhpbGlwcC9Ecm9wYm94L1Byb2dyYW1taW5nL1NvbGlkaXR5X1R1dG9yaWFsL1NtYXJ0Q29udHJhY3RfVWRlbXlfQ291cnNlL2tpY2tzdGFydCJ9