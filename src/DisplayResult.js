import "./App.css";

const displayResult = (props) => {
    const question = props.questions[props.index];

    if(!question.playerChoice){
        return(
            <h3></h3>
        );
    }

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

  export default displayResult;