import { FC, ReactNode, useState } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface FormProps {
  questionNumber: number;
  question: string;
  answerType: "string" | "number" | "multichoice";
  answer: string;
  image: ReactNode;
}

export const Form: FC<FormProps> = ({
  questionNumber,
  question,
  answer,
  answerType,
  image,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (answerType === "string") {
      if (value.toLowerCase() === answer.toLowerCase()) {
        router.push("question2");
      }
      setError("Try again");
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center m-12">
      <h1 className="text-6xl">Question {questionNumber}</h1>
      {image}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          label={question}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        {Boolean(error) && (
          <p className="text-2xl text-xmas-light-red">{error}</p>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
