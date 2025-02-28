import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';

const App3 = () =>{
    const [score, setScore] = useState(0);

    const [questions, setQuestions] = useState([
        {
          id: 0,
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          id: 1,
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          id: 2,
          question: "What animal is more closely related to a wolf?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          id:3,
          question: "BONUS: What animal is best known  for playing  fetch?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        }
      ]);

    const Display = (index) =>{
        const question = questions[index];
        if(score < index){return;}
        return (
        <div className="question-display" key={`q-${index}`}>
            <p className="question">
            {question.question}
            </p>
            <br/>
            {question.possibleAnswers.map((answer, answerIndex) => (
            <button key={`q-${index}-a-${answerIndex}`} className="question-choice" onClick={() =>
                answerQuestion(index, answer)
            }>
                {answer}
            </button>
            ))}
            {displayResult(index)}
        </div>
        );
    }
    
    const answerQuestion = (index, choice) =>{
        const answeredQuestion = questions[index];
        answeredQuestion.playerChoice = choice;
    
        const allQuestions = questions;
    
        allQuestions[index] = answeredQuestion;
        
        setQuestions({allQuestions});
        {updatePlayerScore()}
    }

    const updatePlayerScore = () =>{
        const playerScore = questions.filter(q => q.rightAnswer === q.playerChoice).length;
    
        setScore({playerScore});
    
        console.log("New player score: ", playerScore)
    }

    const displayResult = (index) => {
        const question = questions[index];
    
        if(!question.playerChoice){ return;}
    
        if(question.playerChoice === question.rightAnswer){
          return(
            <p className="result-correct">
              Your answer is correct!
            </p>
          );
        } else {
          return(
            <p className="result-incorrect">
              Your answer is incorrect!
            </p>
          )
        }
      }
    
    const renderQuestions = () =>{
      return (
          questions.map((question, index) => (
            <div key={question.id}>
              {Display(index)}
            </div>
          ))
        );
    }

    return (
        <div className="App">
            <h1>Quiz Show!</h1>
            <hr/>
            {renderQuestions()}
        </div>
    );
}

export default App3;