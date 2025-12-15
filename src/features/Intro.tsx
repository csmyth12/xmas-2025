import { Button } from "@/components/Button";

export const Intro = () => (
  <div className="flex flex-col justify-center items-center gap-8">
    <h1 className="text-6xl max-w-[80%]">MERRY CHRISTMAS</h1>
    <p className="text-xl max-w-[80%] text-justify">
      In order to find out what you've gotten for christmas this year, you need
      to take a quick quiz first
    </p>
    <Button href="question1">I'm ready</Button>
  </div>
);
