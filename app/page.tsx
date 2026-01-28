"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-between md:flex-row">
      <div className="md:-mt-40 md:w-1/2 mx-10 xl:ml-12">
        <h2 className="text-[#FE9A00]">HELLO, THIS IS RURI PELINANDANG</h2>
        <h1 className="text-4xl mt-2.5 font-semibold ">
          Building Scalable Digital Products with Type-Safe Precision.
        </h1>
        <p className="mt-6 ">
          Full-Stack Developer specializing in Next.js and Express, delivering
          high-performance applications from database to deployment.
        </p>
        <Button className="mt-12 bg-[#0065FF] px-5 py-3">HIRE ME</Button>
      </div>
      <div className="mx-auto">
        <Image
          src="/hero-image2.png"
          alt="hero image"
          width={500}
          height={500}
          className="-mt-40"
        />
      </div>
    </section>
  );
}
