import { decode } from "entities";

interface Props {
  question: any;
  handleAnswer: (answer: string) => void;
}

const Question = ({ question, handleAnswer }: Props) => {
  const answers =
    question.type === "boolean"
      ? ["True", "False"]
      : [...question.incorrect_answers, question.correct_answer];

  if (question.type === "boolean") {
    answers;
  } else {
    answers.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-white p-4 mb-8">
        {decode(question.question)}
      </h1>
      <div className="flex flex-col items-center">
        {answers.map((answer: string) => (
          <button
            key={answer}
            className="w-3/4 lg:w-2/4 bg-indigo-950 hover:bg-violet-950 text-white font-bold py-4 m-4 rounded-xl"
            onClick={() => handleAnswer(answer)}>
            {decode(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
