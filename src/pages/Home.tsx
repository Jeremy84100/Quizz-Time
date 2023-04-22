import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-20 px-4">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">Quizz Time</h1>
        <h3 className="text-lg text-center">
          This site is a project to develop and showcase my skills in React,
          while learning and making progress in this exciting field of
          programming.
        </h3>
      </div>
      <div>
        <Link to="/quizz" className="bg-indigo-600 px-10 py-5 rounded-2xl">
          Start Quizz
        </Link>
      </div>
    </div>
  );
};

export default Home;
