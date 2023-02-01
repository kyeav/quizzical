import { useState } from "react";

export default function Qna(props) {
  const [selectedAns, setSelectedAns] = useState("");

  const handleClick = (e) => {
    setSelectedAns(e.target.innerHTML);
  };

  const uncheckedAns = (answer) => {
    if (selectedAns === answer) {
      return "selected";
    }
    return "unselected";
  };

  console.log(selectedAns)

  return (
    <section id="qna">
      <h1>{props.qn}</h1>
      <div className="qna__btns">
        <button
          onClick={handleClick}
          className={
            props.checked
              ? checkedAns(props.correctAns)
              : uncheckedAns(props.correctAns)
          }
        >
          {props.correctAns}
        </button>
        {props.incorrectAns.map((ans) => (
          <button
            onClick={handleClick}
            className={props.checked ? checkedAns(ans) : uncheckedAns(ans)}
          >
            {ans}
          </button>
        ))}
      </div>
      <div className="qna__line"></div>
    </section>
  );
}
