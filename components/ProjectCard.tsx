"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ image, title, liveLink, githubLink }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[555px] h-[250px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            See more &gt;
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col items-start justify-center gap-5 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <div className="flex flex-col items-center justify-center gap-4 pl-44 pt-10">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Live Site
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
