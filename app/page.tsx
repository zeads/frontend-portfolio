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
    <>
      <Hero />
      <Whatcanido />
      <Whyme />
      <Workprocess />
      <Cta />
    </>
  );
}
