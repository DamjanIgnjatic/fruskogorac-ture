import {
  hamburgerMenuFirstLine,
  hamburgerMenuSecondLine,
  hamburgerMenuThirdLine,
} from "../animations/animations";

export const dummyHeaderData = [
  { menuItem: "Home", url: "/" },
  { menuItem: "About", url: "/about" },
  { menuItem: "Tours", url: "/tours" },
  { menuItem: "Blog", url: "/blog" },
  { menuItem: "Gallery", url: "/gallery" },
  { menuItem: "Contact", url: "/contact" },
];

export const hamburgerMenuLines = [
  {
    id: 1,
    className: "absolute h-1 w-10 bg-white",
    style: {
      left: "50%",
      top: "35%",
      x: "-50%",
      y: "-50%",
      borderRadius: "2px",
    },
    variant: { ...hamburgerMenuFirstLine },
  },
  {
    id: 2,
    className: "absolute h-1 w-10 bg-white",
    style: {
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      borderRadius: "2px",
    },
    variant: { ...hamburgerMenuSecondLine },
  },
  {
    id: 3,
    className: "absolute h-1 w-5 bg-white",
    style: {
      left: "calc(50% + 10px)",
      bottom: "35%",
      x: "-50%",
      y: "50%",
      borderRadius: "2px",
    },
    variant: { ...hamburgerMenuThirdLine },
  },
];
