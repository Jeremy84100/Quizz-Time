interface Props {
  handleDifficulty: (difficulty: string) => void;
  handleType: (type: string) => void;
  isSelectedDifficulty: string;
  isSelectedType: string;
}

const Filter = ({
  handleDifficulty,
  handleType,
  isSelectedDifficulty,
  isSelectedType,
}: Props) => {
  const handleDifficultyClick = (difficulty: string) => {
    handleDifficulty(difficulty);
  };

  const handleTypeClick = (type: string) => {
    handleType(type);
  };

  return (
    <div className="flex flex-wrap justify-around">
      <div>
        <h1 className="text-center text-2xl">Select Difficulty</h1>
        <div className="flex justify-center gap-6 p-6">
          <button
            className={`w-24 bg-indigo-950 text-white p-4 rounded-lg hover:bg-violet-950 ${
              isSelectedDifficulty === "easy" ? "bg-violet-950" : ""
            }`}
            onClick={() => handleDifficultyClick("easy")}>
            Easy
          </button>
          <button
            className={`w-24 bg-indigo-950 text-white p-4 rounded-lg hover:bg-violet-950 ${
              isSelectedDifficulty === "medium" ? "bg-violet-950" : ""
            }`}
            onClick={() => handleDifficultyClick("medium")}>
            Medium
          </button>
          <button
            className={`w-24 bg-indigo-950 text-white p-4 rounded-lg hover:bg-violet-950 ${
              isSelectedDifficulty === "hard" ? "bg-violet-950" : ""
            }`}
            onClick={() => handleDifficultyClick("hard")}>
            Hard
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl">Select Type</h1>
        <div className="flex justify-center gap-6 p-6">
          <button
            className={`w-24 bg-indigo-950 text-white p-4 rounded-lg hover:bg-violet-950 ${
              isSelectedType === "multiple" ? "bg-violet-950" : ""
            }`}
            onClick={() => handleTypeClick("multiple")}>
            Multiple
          </button>
          <button
            className={`w-24 bg-indigo-950 text-white p-4 rounded-lg hover:bg-violet-950 ${
              isSelectedType === "boolean" ? "bg-violet-950" : ""
            }`}
            onClick={() => handleTypeClick("boolean")}>
            Boolean
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
