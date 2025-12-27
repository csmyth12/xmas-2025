"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import Clap from "../../images/clap.jpg";

const Question5 = () => {
  return (
    <Form
      questionNumber={5}
      question="How many claps are there in the FRIENDS song?"
      answer="4"
      image={<Image src={Clap} aria-hidden alt="" />}
    />
  );
};

export default Question5;
