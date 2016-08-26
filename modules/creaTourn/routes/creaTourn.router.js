var express = require('express');

creaTournRouter = express.Router();

module.exports = creaTournRouter;

var templatesController = require('./../controllers/templates.controller');

creaTournRouter.get('/templates/:id', templatesController.getTemplate);
creaTournRouter.post('/templates', templatesController.createTemplate);
creaTournRouter.put('/templates/:id', templatesController.updateTemplate);
