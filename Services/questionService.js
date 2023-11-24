// services/questionService.js
const Question = require('../Model/questionModel');

// Function to generate a question paper
async function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];
  const marksDistribution = calculateMarksDistribution(totalMarks, difficultyDistribution);
  let isPossible = true;
  for (const difficulty in marksDistribution) {
    const questions = await getQuestionsByDifficulty(difficulty, marksDistribution[difficulty]);
    // console.log(questions);
    if(questions) {
        // if(questions.sum != marksDistribution[difficulty]) {
        //     isPossible = false;
        //     break;
        // }
        questionPaper.push(...questions.totalQuestion);
    }
  }
  if(!isPossible) {
    return {
        "message" : "Unable to generate Question Paper with given Marks Distribution"
    }
  } else {
    return questionPaper;
  }
}

// Function to calculate marks distribution based on difficulty
function calculateMarksDistribution(totalMarks, difficultyDistribution) {
  const marksDistribution = {};
  for (const difficulty in difficultyDistribution) {
    const difficultyPercentage = difficultyDistribution[difficulty];
    marksDistribution[difficulty] = Math.floor(totalMarks * difficultyPercentage);
  }
  console.log(marksDistribution);
  return marksDistribution;
}

// Function to get questions by difficulty and marks
async function getQuestionsByDifficulty(difficulty, marks) {
  try {
    const filteredQuestions = await Question.find({
      difficulty: new RegExp(difficulty, 'i'), // Case-insensitive search
    });
    let totalQuestion = [];
    let sum = 0;
    for(let i=0;i<filteredQuestions.length;i++) {
        sum += filteredQuestions[i].marks;
        totalQuestion.push(filteredQuestions[i]);
        if(sum >= marks) {
            break;
        }
    }
    return {totalQuestion: totalQuestion,sum: sum};
  } catch (error) {
    throw new Error('Error retrieving questions');
  }
}

module.exports = {
  generateQuestionPaper,
};
