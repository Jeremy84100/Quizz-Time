import { useState, useEffect } from "react";
import Question from "../components/Question";
import Score from "../components/Score";

interface Props {
  difficulty: string;
  type: string;
  id: number;
  name: string;
  score: number;
  handleSetScore: (score: number) => void;
  handleSaveScores: (
    score: number,
    category: string,
    type: string,
    difficulty: string
  ) => void;
  setScore: (score: number) => void;
}

const Play = ({
  difficulty,
  type,
  id,
  name,
  score,
  handleSetScore,
  handleSaveScores,
  setScore,
}: Props) => {
  const [questions, setQuestions] = useState<Array<{ correct_answer: string }>>(
    []
  );
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [index, setIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&type=${type}`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    fetchQuestions();
  }, [difficulty, type, id]);

  useEffect(() => {
    setCurrentQuestion(1);
    setIndex(0);
    setGameOver(false);
    setQuestions([]);
    setScore(0);
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[index].correct_answer) {
      handleSetScore(score + 1);
    }
    if (currentQuestion === 10) {
      setGameOver(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setIndex(index + 1);
    }
  };

  return (
    <div className="flex flex-col flex-grow items-center text-center py-12 px-4">
      <div className="flex flex-col">
        <h1 className="text-4xl text-white font-medium p-2">{name}</h1>
        {gameOver ? (
          <Score
            score={score}
            handleSaveScores={handleSaveScores}
            difficulty={difficulty}
            type={type}
            name={name}
          />
        ) : (
          <>
            <h2 className="text-xl font-medium text-white">
              Question <span className="font-bold">{currentQuestion}</span> /{" "}
              <span className="font-bold">10</span>
            </h2>
            <h2 className="text-xl font-medium text-white">
              Score: <span className="font-bold">{score}</span>
            </h2>
          </>
        )}
        {questions.length === 0 && !gameOver && (
          <h1 className="text-white text-2xl m-12 font-medium">No questions available</h1>
        )}
      </div>
  
      {questions.length > 0 && !gameOver && (
        <Question question={questions[index]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default Play;
