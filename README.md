# Question Paper Generator
## Overview
The Question Paper Generator is a backend application designed to store and generate question papers based on user-defined criteria. It utilizes a Question Store to manage a set of questions, each with attributes such as question text, subject, topic, difficulty, and marks.


## Features
#### 1.Question Store:
Questions are stored in the Question Store with attributes {question, subject, topic, difficulty, marks}.

Example: {“What is the speed of light”, “Physics”, “Waves”, “Easy”, 5}

#### 2.Question Paper Generation:
The application generates question papers based on user-defined criteria.
Users can specify the total marks for the question paper and the distribution of marks based on difficulty levels.
Example: Generate a question paper of 100 marks with difficulty distribution {20% Easy, 50% Medium, 30% Hard}.

## Setup:
Clone the repository to your local machine.
Install the required dependencies.
Populating the Question Store:
Add questions to the Question Store using the provided attributes.

## Project Setup
#### Clone the Repository:
Clone the project repository to your local machine using the following command:
`git clone <repository-url>`

#### Navigate to Project Directory:
Change your working directory to the project folder:
`cd project-folder`

#### Install Dependencies:
Install project dependencies using npm:
`npm i`

#### Environment Variables:
Create a .env file in the root of your project to store environment variables (if applicable).

`PORT=3000`
`DATABASE_URL=mongodb://localhost:27017/mydatabase`

## Development
Start the Development Server:

npm i
npm run start
