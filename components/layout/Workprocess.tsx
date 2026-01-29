import React from "react";

export default function Workprocess() {
  return (
    <section className=" lg:h-full items-center justify-between  px-10 mt-20 ">
      <div className="text-center">
        <h3 className="font-bold text-sm text-blue-500">MY WORKFLOW</h3>
        <h3 className="font-bold text-2xl">The Journey of Your Project</h3>
      </div>
      <div className="mt-20 flex flex-wrap gap-20 items-center justify-center">
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>01</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Brainstorm</h1>
            <p>Analyze needs and determine the best tech stack.</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>02</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Prototype</h1>
            <p>Designing database schema and application wireframe.</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>03</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Build</h1>
            <p>Full-Stack Development with Type-Safe system (TypeScript).</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>04</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Refine</h1>
            <p>Speed ​​optimization (SEO) and code cleanup.</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>05</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Launch</h1>
            <p>Deployment to a stable production environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
