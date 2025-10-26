// Mobile Navigation
export const animateMobileNavigation = {
  open: {
    position: "absolute",
    scale: 55,
    borderRadius: "0%",
    right: "0%",
    top: "0%",
  },
  closed: {
    scale: 1,
    borderRadius: "50%",
    right: "0",
    top: "0",
  },
};

export const parentVariants = {
  open: { transition: { staggerChildren: 0.1 } },
  closed: {
    transition: {
      staggerChildren: -0.1,
    },
  },
};

export const childVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

// HamburgerNav
export const hamburgerMenuFirstLine = {
  open: {
    rotate: ["0", "0", "45deg"],
    top: ["35%", "50%", "50%"],
  },
  closed: {
    rotate: ["45deg", "0", "0"],
    top: ["50%", "50%", "35%"],
  },
};

export const hamburgerMenuSecondLine = {
  open: {
    rotate: ["0", "0", "-45deg"],
  },
  closed: {
    rotate: ["-45deg", "0", "0"],
  },
};

export const hamburgerMenuThirdLine = {
  open: {
    rotate: ["0", "0", "45deg"],
    left: "50%",
    bottom: ["35%", "50%"],
  },
  closed: {
    rotate: ["45deg", "0", "0"],
    left: "calc(50% + 10px)",
    bottom: ["50%", "35%"],
  },
};
