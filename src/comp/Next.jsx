const Next = ({ dispatch, answer }) => {
  if (answer === null) return null;
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    </div>
  );
};
export default Next;
