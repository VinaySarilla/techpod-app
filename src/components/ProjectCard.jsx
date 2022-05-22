import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function ProjectCard() {
  const [card, setCard] = useState(0);
  const [cards, setCards] = useState([]);
  const [projects, setProjects] = useState([
    "We help tech companies with Branding, UX, Designing and headless CMS integration",
    "We helped 100+ students from US and UK save 1000+ hours from college CS projects",
  ]);

  useEffect(() => {
    let newCards = [];
    projects.map((pro, i) => {
      newCards.push(getCard(pro, i));
    });
    setCards(newCards);
  }, []);

  const TechCard = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        key="techcard"
        exit={{ opacity: 0 }}
        transition={{
          default: { duration: 0.3 },
        }}
        className="grid p-7 my-3 justify-center items-center h-68 aspect-square bg-white rounded-2xl text-slate-50"
      >
        <img src="/react.png" className="w-full" />
        <img src="/nextjs.png" className="w-full" />
        <img src="/tailwind.png" className="w-full" />
        <img src="/figma.png" className="w-full" />
        <img src="/strapi.png" className="w-full" />
      </motion.div>
    );
  };

  const getCard = (pro, i) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        key={i}
        exit={{ opacity: 0 }}
        transition={{
          default: { duration: 0.3 },
        }}
        className="flex p-7 my-3 justify-center items-center h-68 aspect-square bg-slate-800 rounded-2xl text-slate-50"
      >
        <h1 className="text-3xl">{pro}</h1>
      </motion.div>
    );
  };

  return (
    <div className="text-center">
      <AnimatePresence exitBeforeEnter>{cards && cards[card]}</AnimatePresence>
      <button
        className="bg-slate-50 ring-2 ring-slate-700 rounded-xl py-2 px-4"
        onClick={() => {
          if (card < 1) {
            setCard(card + 1);
          } else {
            setCard(0);
          }
        }}
      >
        Next
      </button>

      <TechCard />
    </div>
  );
}
