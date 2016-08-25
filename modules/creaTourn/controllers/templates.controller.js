var express = require('express');
var service = require('./../services/templates.service');

module.exports = {
    getTemplate: getTemplate,
    createTemplate: createTemplate
};

function getTemplate(req, res, next) {
    var id = req.params.id;
    res.send(service.getTemplate(id));
}

function createTemplate(req, res, next) {
    res.send(service.createTemplate());
}
