import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  score: number;
  difficulty: string;
  type: string;
  name: string;
  handleSaveScores: (
    score: number,
    category: string,
    type: string,
    difficulty: string
  ) => void;
}

const Score = ({ score, difficulty, type, name, handleSaveScores }: Props) => {
  const [emoji, setEmoji] = useState<string>("");

  useEffect(() => {
    const possibleEmojis = [
      "😊",
      "🤩",
      "😎",
      "🥳",
      "🤗",
      "👏",
      "🙌",
      "🎉",
      "🎊",
      "🔥",
      "💯",
      "✨",
      "💪",
    ];
    const randomIndex = Math.floor(Math.random() * possibleEmojis.length);
    const selectedEmoji = possibleEmojis[randomIndex];

    setEmoji(selectedEmoji);
  }, []);

  return (
    <div className="font-medium flex flex-col justify-around items-center my-24">
      <h1 className="w-screen text-9xl text-center">{emoji}</h1>
      <h1 className="text-2xl font-medium text-white mt-10 mb-16">
        You scored <span className="font-bold">{score}</span> out of{" "}
        <span className="font-bold">10</span>
      </h1>
      <Link
        to="/quizz"
        className="w-3/4 lg:w-1/4 bg-indigo-950 hover:bg-violet-950 text-white font-bold py-4 m-4 rounded-xl">
        <button
          className="w-full"
          onClick={() => handleSaveScores(score, name, type, difficulty)}>
          Save score
        </button>
      </Link>
    </div>
  );
};

export default Score;
