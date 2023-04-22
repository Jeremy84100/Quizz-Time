import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="py-5 bg-indigo-950">
      <ul className="flex flex-row justify-around">
        <li className="text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl">
          <Link to="/quizz">Quizz</Link>
        </li>
        <li className="text-xl">
          <Link to="/scores">Scores</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
