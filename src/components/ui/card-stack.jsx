"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        newArr.unshift(newArr.pop());
        return newArr;
      });
    }, 5000);
  };

  return (
    <div className="relative h-auto w-full">

      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="
            absolute w-full h-[280px] 
            rounded-xl 
            p-5 
            flex flex-col justify-center
            bg-fundo-claro
            border border-border
            shadow-lg items-center
          "
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >

          {/* HEADER */}
          <div>
            <h2 className="text-amarelo text-xl font-bold">
              Empresa:{" "}
              <span className="italic text-primaria">
                {card.empresa}
              </span>
            </h2>
          </div>

          {/* CONTEÚDO */}
          <p className="text-texto text-sm leading-relaxed">
            {card.descricao}
          </p>

        </motion.div>
      ))}

    </div>
  );
};