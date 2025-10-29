import Link from "next/link";
import Icon from "../general/Icon";
import { dummyHeaderData } from "@/src/data/headerData";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "motion/react";

export const DesktopNav = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <ul className="hidden d:flex d:gap-[52px]">
        {dummyHeaderData.map((item) => {
          return (
            <motion.li key={item.menuItem}>
              <Link
                className={classNames(
                  "border-b-8 border-transparent pt-10 pb-9 description-xs",
                  {
                    "border-white border-b-0 font-bold": pathname === item.url,
                  }
                )}
                href={item.url}
              >
                {item.menuItem}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      <a
        href="https://youtube.com"
        className="hidden subheading-s d:flex items-center gap-4 p-2 rounded-xl bg-black-opacity"
        target="_blank"
      >
        <div className="p-2 bg-10 rounded-lg bg-white">
          <Icon name="youtube" height={10} width={16} />
        </div>
        Youtube
      </a>
    </>
  );
};
