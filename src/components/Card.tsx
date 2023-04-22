interface Props {
  category: string;
  id: number;
  isSelectedId: boolean;
  handleId: (id: number) => void;
  handleName: (name: string) => void;
}

const Card = ({ category, id, isSelectedId, handleId, handleName }: Props) => {
  const handleClick = () => {
    handleId(id);
    handleName(category);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 hover:bg-slate-500 cursor-pointer ${
        isSelectedId ? "bg-gray-500" : ""
      }`}
      onClick={handleClick}>
      <h1 className="text-l font-bold text-black">{category}</h1>
    </div>
  );
};

export default Card;
