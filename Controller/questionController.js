const questionService = require('../Services/questionService')
const Question = require('../Model/questionModel')

// Function to get all questions
async function getAllQuestions(req, res) {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Function to add a new question
async function addQuestion(req, res) {
  try {
    const { question, subject, topic, difficulty, marks } = req.body;

    if (!question || !subject || !topic || !difficulty || !marks) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newQuestion = new Question({
      question,
      subject,
      topic,
      difficulty,
      marks,
    });

    await newQuestion.save();

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Route to generate a question paper
async function generateQuestionPaper(req, res) {
  try {
    const {totalMarks,easy,medium,hard} = req.body;
    const total_marks = totalMarks;
    const difficultyDistribution = {
      Easy: easy,
      Medium: medium,
      Hard: hard,
    };
    const questionPaper = await questionService.generateQuestionPaper(total_marks, difficultyDistribution);
    console.log(questionPaper);
    res.json(questionPaper);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllQuestions,
  addQuestion,
  generateQuestionPaper,
};
