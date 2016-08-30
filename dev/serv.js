/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />
"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();
// test route
router.get('/', function (req, res) {
    res.json([
        {
            server: 'www.starz.com',
            redirects: [
                {
                    path: '/jrm',
                    uuid: 'unique',
                    enabledTest: true,
                    enabledProd: true,
                    url: 'http://justinrmeyer.com',
                    createdBy: 'jumeyer',
                    createdOn: '2016-08-21 00:00:00',
                    modifiedOn: '2016-08-21 00:00:00',
                    tests: [
                        {
                            path: "/jrm",
                            status: true
                        }, {
                            path: "/jrminfo",
                            status: false
                        }
                    ]
                }, {
                    path: '/justin',
                    uuid: 'unique',
                    enabledTest: true,
                    enabledProd: true,
                    url: 'http://justinrmeyer.info',
                    createdBy: 'jumeyer',
                    createdOn: '2016-08-21 00:00:00',
                    modifiedOn: '2016-08-21 00:00:00',
                    tests: [
                        {
                            path: "/jrm",
                            status: true
                        }, {
                            path: "/jrminfo",
                            status: false
                        }
                    ]
                }
            ]
        }, {
            server: 'starz.com',
            redirects: [
                {
                    path: '/otherurl',
                    uuid: 'unique',
                    enabledTest: true,
                    enabledProd: true,
                    url: 'http://other.com',
                    createdBy: 'jumeyer',
                    createdOn: '2016-08-21 00:00:00',
                    modifiedOn: '2016-08-21 00:00:00',
                    tests: [
                        {
                            path: "/jrm",
                            status: true
                        }, {
                            path: "/jrminfo",
                            status: false
                        }
                    ]
                }, {
                    path: '/something',
                    uuid: 'unique',
                    enabledTest: true,
                    enabledProd: false,
                    url: 'http://something.info',
                    createdBy: 'jumeyer',
                    createdOn: '2016-08-21 00:00:00',
                    modifiedOn: '2016-08-21 00:00:00',
                    tests: [
                        {
                            path: "/jrm",
                            status: true
                        }, {
                            path: "/jrminfo",
                            status: false
                        }
                    ]
                }, {
                    path: '/careers',
                    uuid: 'unique',
                    enabledTest: false,
                    enabledProd: true,
                    url: 'http://linkedin.com',
                    createdBy: 'jumeyer',
                    createdOn: '2016-08-23 00:00:00',
                    modifiedOn: '2016-08-21 01:11:01',
                    tests: [
                        {
                            path: "/jrm",
                            status: true
                        }, {
                            path: "/jrminfo",
                            status: false
                        }
                    ]
                }
            ]
        }
    ]);
});
// prefixed all routes with /api
app.use('/api', router);
app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');
//# sourceMappingURL=serv.js.map