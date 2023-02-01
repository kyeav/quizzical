import { useEffect, useState } from "react";
import Qna from "./Qna";
import { nanoid } from "nanoid";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const getQuiz = async () => {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      setQuiz(data.results);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getQuiz();
  }, []);

  const handleCheckAnswers = () => {
    setChecked(true);
  };

  console.log(checked)

  return (
    <section id="quiz">
      <div className="quiz">
        {loading ? (
          <h1 className="quiz__h1">Loading...</h1>
        ) : (
          quiz.map((qna) => (
            <Qna
              key={nanoid()}
              qn={qna.question}
              correctAns={qna.correct_answer}
              incorrectAns={qna.incorrect_answers}
              checked={checked}
            />
          ))
        )}
      </div>

      <button onClick={handleCheckAnswers} className="quiz__btn">
        Check answers
      </button>
    </section>
  );
}
