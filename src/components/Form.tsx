import { FC, ReactNode, useState } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface FormProps {
  questionNumber: number;
  question: string;
  answerType: "string" | "number" | "multichoice";
  answer: string | string[] | number;
  image: ReactNode;
  errorMessages?: Record<string | number, string>;
}

export const Form: FC<FormProps> = ({
  questionNumber,
  question,
  answer,
  answerType,
  image,
  errorMessages,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const setErrorMessage = () => {
    if (errorMessages && errorMessages[value.toLowerCase()]) {
      setError(errorMessages[value.toLowerCase()]);
    } else {
      setError("Try again");
    }
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (answerType === "string") {
      if (typeof answer === "string") {
        if (value.toLowerCase() === answer.toLowerCase()) {
          setError("");
          router.push(`question${questionNumber + 1}`);
        } else {
          setErrorMessage();
        }
      } else if (Array.isArray(answer)) {
        if (answer.find((a) => a.toLowerCase() === value.toLowerCase())) {
          setError("");
          router.push(`question${questionNumber + 1}`);
        } else {
          setErrorMessage();
        }
      }
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
