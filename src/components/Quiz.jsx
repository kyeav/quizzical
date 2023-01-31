import Qna from "./Qna";

export default function Quizz() {
  return (
    <section id="quiz">
      <div className="quiz">
        <Qna />
        <Qna />
        <Qna />
        <Qna />
        <Qna />
      </div>

      <button className="quiz__btn">Check answers</button>
    </section>
  );
}
