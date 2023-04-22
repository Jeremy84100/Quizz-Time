import ScoreCard from "../components/ScoreCard";

interface ScoreProps {
  saveScores: {
    score: number;
    category: string;
    type: string;
    difficulty: string;
  }[];
}

const Scores = ({ saveScores }: ScoreProps) => {
  return (
    <div className="flex-grow flex flex-col">
      <h1 className="text-5xl mb-10 text-center p-12" >Scores Page</h1>
      <div className="flex flex-wrap gap-4 m-12 justify-center">
        {saveScores.map((score, index) => (
          <ScoreCard key={index} score={score} />
        ))}
      </div>
    </div>
  );
};
export default Scores;
