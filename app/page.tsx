"use client";

import Cta from "@/components/layout/Cta";
import Hero from "@/components/layout/Hero";
import Whatcanido from "@/components/layout/Whatcanido";
import Whyme from "@/components/layout/Whyme";
import Workprocess from "@/components/layout/Workprocess";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // <section className="h-screen flex flex-col items-center justify-between lg:flex-row">
    //   <div className="md:-mt-40 lg:w-1/2 mx-10 xl:ml-12">
    //     <h1 className="mt-10 text-5xl tracking-[0.03em] leading-15">
    //       Building Scalable Digital Products with Type-Safe Precision.
    //     </h1>
    //     {/* <h2 className=" mt-6">

    //     </h2> */}
    //     <p className="mt-6 max-w-xl">
    //       Hi There, I am{" "}
    //       <span className="font-bold text-[#FE9A00]">Ruri Pelinandang</span>.
    //       <br />A Full-Stack Developer specializing in Next.js and Express,
    //       delivering high-performance applications from database to deployment.
    //     </p>
    //     <Button className="mt-12 bg-[#0065FF] px-7 py-5 hover:bg-blue-800">
    //       HIRE ME
    //     </Button>
    //   </div>
    //   <div className="mx-auto">
    //     <Image
    //       src="/hero-image2.png"
    //       alt="hero image"
    //       width={500}
    //       height={500}
    //       className="-mt-40"
    //     />
    //   </div>
    // </section>
    <>
      <Hero />
      <Whatcanido />
      <Whyme />
      <Workprocess />
      <Cta />
    </>
  );
}
