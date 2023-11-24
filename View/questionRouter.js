// views/questionRoutes.js
const express = require('express');
const questionController = require('../Controller/questionController')

const router = express.Router();

// Route to get all questions
router.get('/questions', questionController.getAllQuestions);

// Route to add a new question
router.post('/questions', questionController.addQuestion);

// Route to generate a question paper
router.get('/generate-paper', questionController.generateQuestionPaper);

module.exports = router;
