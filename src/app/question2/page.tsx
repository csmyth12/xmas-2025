"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import Map from "../../images/map.webp";

const Question1 = () => {
  return (
    <Form
      questionNumber={2}
      question="Where did you meet Conor?"
      answer={["Surf Camp", "Arrawarra"]}
      errorMessages={{ australia: "Yeah, but where in Australia?" }}
      answerType="string"
      image={<Image src={Map} aria-hidden alt="" />}
    />
  );
};

export default Question1;
