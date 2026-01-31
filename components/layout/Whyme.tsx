import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

import * as motion from "motion/react-client";

export default function Whyme() {
  return (
    <section
      id="about"
      className=" lg:h-full items-center justify-between  px-10 pt-20 "
    >
      <div className="lg:flex">
        <div className="lg:w-1/2 mx-auto flex items-center justify-center mb-10">
          <Image
            src="/profile-why.png"
            alt="hero image"
            width={500}
            height={500}
            className="mx-auto  "
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center mx-auto">
          <div className="mb-5">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-bold text-sm text-blue-500"
            >
              ABOUT
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              Why Hire Me?
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="max-w-lg mt-4 bg-linear-to-r from-blue-200 to-white p-5 flex gap-3"
          >
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">End-to-End Problem Solver</h3>
              <p className="mt-2">
                I not only build beautiful interfaces with React/Next.js, but
                also design robust server architectures using Express.js.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mt-4 bg-linear-to-r from-blue-200 to-white p-5 flex gap-3"
          >
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Type-Safe & Scalable Code</h3>
              <p className="mt-2">
                With TypeScript, I ensure every line of code has a clear
                structure, minimizes bugs, and is easy to maintain in the long
                run.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="max-w-lg mt-4 bg-linear-to-r from-blue-200 to-white p-5 flex gap-3"
          >
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Versatile Data Management</h3>
              <p className="mt-2">
                Have flexibility in managing data, either using PostgreSQL
                relational structure or NoSQL flexibility with MongoDB.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            className="max-w-lg mt-4 bg-linear-to-r from-blue-200 to-white p-5 flex gap-3"
          >
            <CircleArrowRight className="size-12 text-blue-500 -mt-3" />
            <div>
              <h3 className="font-semibold">Performance First</h3>
              <p className="mt-2">
                My expertise in Next.js ensures your app has high performance,
                optimal SEO, and instant user experience.
              </p>
            </div>
          </motion.div>
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
