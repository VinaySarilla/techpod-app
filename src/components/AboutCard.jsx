import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
              <div className="bg-slate-50 w-full h-[90vh] p-4">
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
              <div className="bg-slate-800 w-full h-[90vh] p-4">
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
              <div className="bg-slate-200 w-full h-[90vh] p-4">
                <ContactPage />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial="hidden" animate="visible" variants={list}>
        <div className="flex justify-around">
          <button
            className={`p-4 m-2 text-slate-800 rounded-md text-lg ${
              show === 0 ? `bg-slate-300` : ""
            }`}
            onClick={() => setShow(0)}
            key="1"
          >
            <img src="/home.png" width="30px" />
          </button>
          <button
            className={`p-4 m-2 text-slate-800 rounded-md text-lg ${
              show === 1 ? `bg-slate-300` : ""
            }`}
            onClick={() => setShow(1)}
            key="2"
          >
            <img src="/team-icon.png" width="30px" />
          </button>
          <button
            className={`p-4 m-2 text-slate-800 rounded-md text-lg ${
              show === 2 ? `bg-slate-300` : ""
            }`}
            key="3"
            onClick={() => setShow(2)}
          >
            <img src="/heart.png" width="30px" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      <img src="/team.png" />
      <div className="p-4">
        <h1 className="text-slate-800 text-3xl font-bold leading-10">
          Convert your Interesting{" "}
          <span className="text-fuchsia-900 text-4xl">Ideas</span> to Powerful{" "}
          <span className="text-fuchsia-900 text-4xl">Products</span>
        </h1>
      </div>

      <div className="p-4"></div>
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
