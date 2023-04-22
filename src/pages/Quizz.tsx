import Card from "../components/Card";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

interface Props {
  categories: { id: number; name: string }[];
  handleDifficulty: (difficulty: string) => void;
  handleType: (type: string) => void;
  handleId: (id: number) => void;
  handleName: (name: string) => void;

  selectedId: number;
  selectedType: string;
  selectedDifficulty: string;
}

const Quizz = ({
  categories,
  handleDifficulty,
  handleType,
  handleId,
  handleName,
  selectedId,
  selectedType,
  selectedDifficulty,
}: Props) => {
  return (
    <div>
      <div className="text-center p-12">
        <h1 className="text-5xl pb-10">Quizz Themes</h1>
        <h1 className="text-xl">
          In this section, you can add a touch of fun to your quiz by choosing a
          theme. 🎉👀
        </h1>
      </div>

      <Filter
        handleDifficulty={handleDifficulty}
        handleType={handleType}
        isSelectedDifficulty={selectedDifficulty}
        isSelectedType={selectedType}
      />
      <div className="flex flex-wrap justify-center gap-6 px-12 p-12">
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <Card
              category={category.name}
              id={category.id}
              key={category.id}
              isSelectedId={selectedId === category.id}
              handleId={handleId}
              handleName={handleName}
            />
          ))
        ) : (
          <h1 className="text-xl text-center">Loading categories...</h1>
        )}
      </div>
      <div className="flex justify-center">
        <Link to="play">
          <button className="bg-indigo-950 text-white p-4 mb-12 m-6 rounded-lg">
            Start Quizz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quizz;
