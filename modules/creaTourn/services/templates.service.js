var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var async = require('async');
var bodyParser = require('body-parser');

module.exports = {
    getTemplate: getTemplate,
    createTemplate: createTemplate
};

function getTemplate(id) {
    return {
        'id': id
    };
}

function createTemplate() {
    return false;
}
