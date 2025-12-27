"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import TV from "../../images/tv.jpg";

const Question3 = () => {
  return (
    <Form
      questionNumber={3}
      question="What's Conor's favourite TV show?"
      answer={["Avatar", "Avatar the last airbender"]}
      errorMessages={{
        "new girl": "That's his favourite sitcom",
        "ted lasso": "Good guess! That's his number 2",
      }}
      image={<Image src={TV} aria-hidden alt="" />}
    />
  );
};

export default Question3;
