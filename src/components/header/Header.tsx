"use client";
import { useEffect, useState } from "react";
import Logo from "../general/logo/Logo";
import { HamburgerManu } from "./mobile/HamburgerMenu";
import { motion, MotionConfig } from "motion/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./mobile/MobileNav";
import { animateMobileNavigation } from "@/src/animations/animations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <MotionConfig
      transition={{ duration: 0.5, ease: "easeInOut" }}
      reducedMotion="user"
    >
      <motion.header className="relative z-10 py-5 d:py-0 border-b border-border-opacity">
        <div className="custom-container">
          <motion.div
            className="flex justify-between items-center relative"
            animate={isOpen ? "open" : "closed"}
          >
            <Logo />

            <DesktopNav />
            <MobileNav isOpen={isOpen} handleToggle={handleToggle} />

            <motion.div
              variants={animateMobileNavigation}
              className="bg-dark-blue absolute right-0 top-0 rounded-full w-15 h-15 d:hidden"
            />

            <HamburgerManu handleToggle={handleToggle} />
          </motion.div>
        </div>
      </motion.header>
    </MotionConfig>
  );
}
