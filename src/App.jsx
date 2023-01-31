import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const [showQuizzes, setShowQuizzes] = useState(false);

  return (
    <>
      {showQuizzes ? (
        <Quiz />
      ) : (
        <main>
          <h1>Quizzical</h1>
          <button className="btn" onClick={() => setShowQuizzes(true)}>
            Start Quiz
          </button>
        </main>
      )}
    </>
  );
}

export default App;
