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
    newCards.push(techCard())
    setCards(newCards);
  }, []);

  const techCard = () => {
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
    <>
      <AnimatePresence exitBeforeEnter>{cards && cards[card]}</AnimatePresence>
      <button onClick={() => setCard(card + 1)}>Next</button>
    </>
  );
}
