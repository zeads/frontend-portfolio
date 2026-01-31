import * as motion from "motion/react-client";

export default function Workprocess() {
  return (
    <section
      id="myworkflow"
      className=" lg:h-full items-center justify-between  px-10 pt-20 "
    >
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-sm text-blue-500"
        >
          MY WORKFLOW
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-bold text-2xl"
        >
          The Journey of Your Project
        </motion.h1>
      </div>
      <div className="mt-20 flex flex-wrap gap-20 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>01</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Brainstorm</h1>
            <p>Analyze needs and determine the best tech stack.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>02</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Prototype</h1>
            <p>Designing database schema and application wireframe.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>03</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Build</h1>
            <p>Full-Stack Development with Type-Safe system (TypeScript).</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>04</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Refine</h1>
            <p>Speed ​​optimization (SEO) and code cleanup.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-bold text-3xl text-white">
            <span>05</span>
          </div>
          <div className="max-w-xs">
            <h1 className="font-bold">Launch</h1>
            <p>Deployment to a stable production environment.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
