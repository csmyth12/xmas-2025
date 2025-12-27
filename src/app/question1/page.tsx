"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import You from "../../images/you.jpg";

const Question1 = () => {
  return (
    <Form
      questionNumber={1}
      question="What's your name?"
      answer="Holly"
      image={<Image src={You} aria-hidden alt="" />}
    />
  );
};

export default Question1;
