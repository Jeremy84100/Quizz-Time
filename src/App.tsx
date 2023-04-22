import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import Scores from "./pages/Scores";
import Play from "./pages/Play";
import Footer from "./components/Footer";

function App() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [id, setId] = useState<number>(9);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [type, setType] = useState<string>("multiple");
  const [category, setCategory] = useState<string>("General Knowledge");
  const [score, setScore] = useState<number>(0);
  const [saveScores, setSaveScores] = useState<
    Array<{ score: number; category: string; type: string; difficulty: string }>
  >([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) =>
        setCategories(
          data.trivia_categories.map(
            (category: { id: number; name: string }) => ({
              id: category.id,
              name: category.name,
            })
          )
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const handleDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  const handleType = (type: string) => {
    setType(type);
  };

  const handleId = (id: number) => {
    setId(id);
  };

  const handleName = (category: string) => {
    setCategory(category);
  };

  const handleSaveScores = (
    score: number,
    category: string,
    type: string,
    difficulty: string
  ) => {
    setSaveScores([
      ...saveScores,
      {
        score: score,
        category: category,
        type: type,
        difficulty: difficulty,
      },
    ]);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/quizz"
          element={
            <Quizz
              categories={categories}
              handleDifficulty={handleDifficulty}
              handleType={handleType}
              handleId={handleId}
              handleName={handleName}
              selectedId={id}
              selectedType={type}
              selectedDifficulty={difficulty}
            />
          }
        />
        <Route path="/scores" element={<Scores saveScores={saveScores} />} />
        <Route
          path="quizz/play"
          element={
            <Play
              name={category}
              difficulty={difficulty}
              type={type}
              id={id}
              score={score}
              handleSetScore={(score: number) => setScore(score)}
              handleSaveScores={handleSaveScores}
              setScore={setScore}
            />
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
