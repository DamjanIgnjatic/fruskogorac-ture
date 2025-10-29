import classNames from "classnames";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { dummyHeaderData } from "@/src/data/headerData";
import { parentVariants, childVariants } from "@/src/animations/animations";

type MobileNavProps = {
  isOpen: boolean;
  handleToggle: (value: boolean) => void;
};

export const MobileNav = ({ isOpen, handleToggle }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className={classNames("d:hidden", {
            "fixed inset-0 flex flex-col items-center justify-center gap-8 z-99999999 text-white":
              isOpen,
          })}
          variants={parentVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {dummyHeaderData.map((item) => (
            <motion.li key={item.menuItem} variants={childVariants}>
              <Link
                href={item.url}
                className="subheading-m"
                onClick={() => handleToggle(false)}
              >
                {item.menuItem}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
