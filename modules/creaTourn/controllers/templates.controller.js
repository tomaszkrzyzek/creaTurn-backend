// @TODO id validation

var express = require('express');
var service = require('./../services/templates.service');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var async = require('async');
var bodyParser = require('body-parser');

module.exports = {
    getTemplate: getTemplate,
    createTemplate: createTemplate,
    updateTemplate: updateTemplate
};

var databaseUrl = 'mongodb://localhost:27017/creatourn';

function getTemplate(req, res, next) {
    var id = req.params.id;
    async.waterfall([
        function dbConnect(done) {
            MongoClient.connect(databaseUrl, function(err, db) {
                assert.equal(null, err);
                done(null, db);
            });
        },
        function(db, done) {
            var collection = db.collection('templates');
            collection.findOne({
                '_id': ObjectID(id)
            }, function(err, result) {
                if (err) {
                    res.sendStatus(500);
                }
                if (!result) {
                    res.sendStatus(404);
                } else {
                    res.send(result);
                    done(null, res);
                }
            });
        }
    ], function(err, result) {
        assert.equal(null, err);
    });
}

function createTemplate(req, res, next) {
    var newTemplate = req.body;

    async.waterfall([
        function dbConnect(done) {
            MongoClient.connect(databaseUrl, function(err, db) {
                assert.equal(null, err);
                var collection = db.collection('templates');
                done(null, db, collection);
            });
        },
        function(db, collection, done) {
            collection.insert(newTemplate, function(err, inserted) {
                if (err) {
                    res.send(500);
                } else {
                    var insertedId = inserted.ops[0]._id;
                    done(null, insertedId, collection);
                }
            });
        },
        function(insertedId, collection, done) {
            collection.findOne({
                '_id': ObjectID(insertedId)
            }, function(err, result) {
                if (err) {
                    res.sendStatus(500);
                }
                if (!result) {
                    res.sendStatus(404);
                } else {
                    res.send(result);
                    done(null, res);
                }
            });
        }
    ], function(err, result) {
        assert.equal(null, err);
    });
}

function updateTemplate(req, res, next) {
    var newTemplate = req.body;
    var id = req.params.id;

    async.waterfall([
        function dbConnect(done) {
            MongoClient.connect(databaseUrl, function(err, db) {
                assert.equal(null, err);
                var collection = db.collection('templates');
                done(null, db, collection);
            });
        },
        function(db, collection, done) {
            collection.update({
                '_id': ObjectID(id)
            }, newTemplate, function(err, result) {
                if (err) {
                    res.sendStatus(500);
                }
                if (!result) {
                    res.sendStatus(404);
                } else {
                    collection.findOne({
                        '_id': ObjectID(id)
                    }, function(err, result) {
                        if (err) {
                            res.sendStatus(500);
                        }
                        if (!result) {
                            res.sendStatus(404);
                        } else {
                            res.send(result);
                        }
                    });
                    done(null, result);
                }
            });
        }
    ], function(err, result) {
        assert.equal(null, err);
    });
}
