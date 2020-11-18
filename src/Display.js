import './App.css';
import DisplayResult from "./DisplayResult";

const Display = (props) =>{
  const question = props.questions[props.index];
  //if(props.score < props.id){return;}
    return (
      <div className="question-display" key={`q-${props.index}`}>
        <p className="question">
          {question.question}
        </p>
        <br/>
        {question.possibleAnswers.map((answer, answerIndex) => (
          <button key={`q-${props.index}-a-${answerIndex}`} className="question-choice">
            {answer}
          </button>
        ))}
        <DisplayResult index={props.index} questions={props.questions} />
      </div>
    );
  }

  export default Display;