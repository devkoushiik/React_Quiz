const Question = ({ question, dispatch, answer }) => {
  const { question: qs, options, correctOption } = question;
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{qs}</h4>
      <div className="options">
        {options.map((option, i) => (
          <button
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
            key={i}
            className={`btn btn-option ${answer === i ? "answer" : ""} ${
              hasAnswered ? (i === correctOption ? "correct" : "wrong") : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Question;
