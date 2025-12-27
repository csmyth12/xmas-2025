import Image from "next/image";
import Friends from "../../images/friends-the-musical.webp";

const Finale = () => {
  return (
    <div className="flex flex-col gap-8 items-center m-12 text-2xl">
      <h1 className="text-6xl">Save the date!</h1>
      <Image src={Friends} alt="" aria-hidden />
      <p>We're going to see Friends the Musical</p>
      <p>January 22nd 2026</p>
      <p>7pm</p>
      <p>New Wimbledon Theatre</p>
      <p className="text-lg">(Conor has the tickets)</p>
    </div>
  );
};

export default Finale;
