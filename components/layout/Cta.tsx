import { Button } from "../ui/button";

export default function Cta() {
  return (
    <section className=" lg:h-full items-center justify-between  px-10 mt-20 ">
      <h1>Currently open to new opportunities.</h1>
      <p>
        I am looking for my next challenge as a Fullstack Developer. If you
        think my skills in Next.js, Express, and TypeScript would be a great fit
        for your team, I’d love to hear from you.
      </p>
      <Button className="mt-12 bg-[#0065FF] px-7 py-5 hover:bg-blue-800">
        HIRE ME
      </Button>
    </section>
  );
}
