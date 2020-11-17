const displayQuestion = (props) => {
    const question = props.questions[props.index];
    if(props.playerScore < props.index ){return;}
    return(
      <div className="question-display" key={`q-${props.index}`}>
        <p className="question">
          {question.question}
        </p>
        <br/>
        {question.possibleAnswers.map((answer, answerIndex) => (
          <button key={`q-${props.index}-a-${answerIndex}`} className="question-choice" onClick={() =>
          this.answerQuestion(props.index,answer)}> 
            {answer}
          </button>
        ))}
        {this.displayResult(props.index)}
      </div>
    );
  }

  export default displayQuestion;