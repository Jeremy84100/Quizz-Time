interface ScoreProps {
  score: {
    score: number;
    category: string;
    type: string;
    difficulty: string;
  };
}

const ScoreCard = ({ score }: ScoreProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-indigo-950 rounded-lg p-4 gap-4 w-96">
      <h1 className="text-xl font-medium">Score: <span className="text-xl font-bold">{score.score}</span></h1>
      <h1 className="text-xl font-medium">Category: <span className="text-xl font-bold">{score.category}</span></h1>
      <h1 className="text-xl font-medium">Type: <span className="text-xl font-bold">{score.type}</span></h1>
      <h1 className="text-xl font-medium">Difficulty: <span className="text-xl font-bold">{score.difficulty}</span></h1>
    </div>
  );
};

export default ScoreCard;
