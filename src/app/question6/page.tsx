"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import Question from "../../images/question.jpeg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Question6 = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 items-center m-12">
      <h1 className="text-6xl">Question 6</h1>
      <Image src={Question} alt="" aria-hidden />
      <p className="text-2xl">Final question: Are you ready?</p>
      {!!message && <p className="text-3xl  text-xmas-red">{message}</p>}
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => setMessage("Try again, Spongebob!")}>
          Aye aye, Captain!
        </Button>
        <Button onClick={() => setMessage("No money here")}>
          Show me the money!
        </Button>
        <Button onClick={() => setMessage("You sure about that?")}>
          Erm, I think so?
        </Button>
        <Button onClick={() => router.push("finale")}>Yes!</Button>
      </div>
    </div>
  );
};

export default Question6;
