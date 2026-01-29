import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function Whyme() {
  return (
    <section className=" lg:h-full items-center justify-between  px-10 mt-12 ">
      <div className="lg:flex">
        <div className="w-1/2 mx-auto">
          <Image
            src="/profile-why.png"
            alt="hero image"
            width={500}
            height={500}
            className="mx-auto items-center justify-center "
          />
        </div>
        <div className="w-1/2 items-center justify-center mx-auto">
          <div className="mb-5">
            <h3 className="font-bold text-sm text-blue-500">ABOUT</h3>
            <h1 className="font-bold text-2xl">Why Hire Me?</h1>
          </div>
          <div className="max-w-lg mt-4 bg-blue-200 p-5 flex gap-3">
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">End-to-End Problem Solver</h3>
              <p className="mt-2">
                I not only build beautiful interfaces with React/Next.js, but
                also design robust server architectures using Express.js.
              </p>
            </div>
          </div>
          <div className="max-w-lg mt-4 bg-blue-200 p-5 flex gap-3">
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Type-Safe & Scalable Code</h3>
              <p className="mt-2">
                With TypeScript, I ensure every line of code has a clear
                structure, minimizes bugs, and is easy to maintain in the long
                run.
              </p>
            </div>
          </div>
          <div className="max-w-lg mt-4 bg-blue-200 p-5 flex gap-3">
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Versatile Data Management</h3>
              <p className="mt-2">
                Have flexibility in managing data, either using PostgreSQL
                relational structure or NoSQL flexibility with MongoDB.
              </p>
            </div>
          </div>
          <div className="max-w-lg mt-4 bg-blue-200 p-5 flex gap-3">
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Performance First</h3>
              <p className="mt-2">
                My expertise in Next.js ensures your app has high performance,
                optimal SEO, and instant user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-10 italic">
        <h3>
          &quot;I dont just write code. I craft digital experiences that are as
          robust as they are intuitive.&quot;
        </h3>
      </div>
    </section>
  );
}
