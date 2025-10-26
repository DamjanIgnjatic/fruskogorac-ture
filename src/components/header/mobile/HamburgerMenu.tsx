import { motion } from "motion/react";
import { hamburgerMenuLines } from "@/src/data/headerData";

type HamburgerManuProps = {
  handleToggle: () => void;
};

export const HamburgerManu = ({ handleToggle }: HamburgerManuProps) => {
  return (
    <motion.button
      className="relative w-15 h-15 bg-blue-20 rounded-full z-[9999999999999999] d:hidden"
      onClick={handleToggle}
    >
      {hamburgerMenuLines.map((item) => {
        return (
          <motion.span
            key={item.id}
            style={item.style}
            className={item.className}
            variants={item.variant}
          ></motion.span>
        );
      })}
    </motion.button>
  );
};
