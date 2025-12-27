"use client";
import { Form } from "@/components/Form";
import Image from "next/image";
import Friends from "../../images/friends.jpg";

const Question4 = () => {
  return (
    <Form
      questionNumber={4}
      question="On the topic of TV, how many seasons of FRIENDS are there?"
      answer="10"
      errorMessages={{
        "9": "Higer",
        "11": "Lower",
      }}
      image={<Image src={Friends} aria-hidden alt="" />}
    />
  );
};

export default Question4;
