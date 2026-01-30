import { useState } from "react";
import { Button } from "../ui/button";

export default function Cta() {
  const [copied, setCopied] = useState(false);

  if (copied) {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ruri.pelinandang@gmail.com");
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <section
      id="contactme"
      className=" lg:h-full flex flex-col items-center justify-between text-center  px-10 pt-20 mt-20 bg-linear-to-r from-blue-500 to-cyan-500 text-white py-20 rounded "
    >
      <h1 className="text-4xl">Currently open to new opportunities.</h1>
      <p className="mt-6 max-w-xl leading-7 tracking-wide flex ">
        I am looking for my next challenge as a Fullstack Developer. If you
        think my skills in Next.js, Express, and TypeScript would be a great fit
        for your team, I’d love to hear from you.
      </p>
      <Button
        onClick={handleCopy}
        className="mt-12 bg-white text-gray-700 font-bold px-7 py-5 hover:bg-blue-800 hover:text-white"
      >
        {copied ? "Email Copied!" : "Get In Touch"}
      </Button>
    </section>
  );
}
