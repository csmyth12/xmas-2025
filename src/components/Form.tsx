import { ChangeEvent, FC, useState } from "react";
import { Input } from "./Input";

interface FormProps {
  questionNumber: number;
  question: string;
  answer: string;
}

export const Form: FC<FormProps> = ({ questionNumber, question, answer }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Question {questionNumber}</h1>
      <form>
        <Input
          label={question}
          value={value}
          onChange={(event: ChangeEvent) => {
            console.log(event);
            setValue(event.target.value);
          }}
        />
      </form>
    </div>
  );
};
