import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
export default function AboutCard() {
  const [show, setShow] = useState(0);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {show === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
            }}
            key="1"
            transition={{
              default: { duration: 0.3 },
            }}
          >
            <div className="">
              <div className="bg-slate-50 w-full p-4">
                <HomePage />
              </div>
            </div>
          </motion.div>
        )}
        {show === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
            }}
            key="2"
            transition={{
              default: { duration: 0.2 },
            }}
          >
            <div className="">
              <div className="bg-slate-100 w-full h-[90vh] p-4">
                <TeamPage />
              </div>
            </div>
          </motion.div>
        )}
        {show === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
            }}
            key="3"
            transition={{
              default: { duration: 0.1 },
            }}
          >
            <div className="">
              <div className="bg-slate-100 w-full h-[90vh] p-4">
                <ContactPage />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed inset-x-0 bottom-0 z-10 block bg-white py-3 shadow">
        <div className="flex justify-around">
          <button
            className={`p-2 text-slate-800 rounded-md text-lg ${
              show === 0 ? `bg-slate-300` : ""
            }`}
            onClick={() => setShow(0)}
            key="1"
          >
            <img src="/home.png" width="25px" />
          </button>
          <button
            className={`p-2 text-slate-800 rounded-md text-lg ${
              show === 1 ? `bg-slate-300` : ""
            }`}
            onClick={() => setShow(1)}
            key="2"
          >
            <img src="/team-icon.png" width="25px" />
          </button>
          <button
            className={`p-2 text-slate-800 rounded-md text-lg ${
              show === 2 ? `bg-slate-300` : ""
            }`}
            key="3"
            onClick={() => setShow(2)}
          >
            <img src="/heart.png" width="25px" />
          </button>
          <button
            className={`p-2 text-slate-800 rounded-md text-lg ${
              show === 3 ? `bg-slate-300` : ""
            }`}
            key="4"
            onClick={() => setShow(3)}
          >
            <img src="/connect.png" width="25px" />
          </button>
        </div>
      </div>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="p-2 mb-10">
      <img src="/team.png" />
      <div className="">
        <h1 className="text-slate-800 text-3xl font-bold leading-10">
          <span className="text-4xl">Ideas</span> to{" "}
          <span className="text-4xl">Products</span>
        </h1>
        <p className="text-slate-500 leading-6 font-medium text-xl">
          Driven by modern technologies and creative minds.
        </p>
      </div>

      <div className="mt-5">
        <p className="font-medium text-slate-600 text-2xl">
          Products & Services
        </p>

        <ProjectCard />
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div>
      <img src="/work.png" />
      <div className="p-4">
        <h1 className="text-white text-3xl font-bold leading-10">
          Meet our <span className="text-4xl text-fuchsia-900">Team</span>
        </h1>
      </div>
      <div className="p-4"></div>
    </div>
  );
};

const ReviewPage = () => {
  return (
    <div>
      <img src="/review.png" />
      <div className="p-4">
        <h1 className="text-slate-800 text-3xl font-bold leading-10">
          Read what our{" "}
          <span className="text-4xl text-fuchsia-900">Clients & Friends</span>{" "}
          say about us{" "}
        </h1>
      </div>

      <div className="p-4"></div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <img src="/review.png" />
      <div className="p-4">
        <h1 className="text-slate-800 text-3xl font-bold leading-10">
          Read what our{" "}
          <span className="text-4xl text-fuchsia-900">Clients & Friends</span>{" "}
          say about us{" "}
        </h1>
      </div>

      <div className="p-4"></div>
    </div>
  );
};
