"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import Map from "../../images/map.webp";

const Question2 = () => {
  return (
    <Form
      questionNumber={2}
      question="Where did you meet Conor?"
      answer={["Surf Camp", "Arrawarra"]}
      errorMessages={{ australia: "Yeah, but where in Australia?" }}
      image={<Image src={Map} aria-hidden alt="" />}
    />
  );
};

export default Question2;
