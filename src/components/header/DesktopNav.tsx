import Link from "next/link";
import Icon from "../general/Icon";
import { dummyHeaderData } from "@/src/data/headerData";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden d:flex d:gap-[52px]">
        {dummyHeaderData.map((item) => {
          return (
            <li
              key={item.menuItem}
              className={classNames(
                "d:pt-10 pb-8 border-b-8 border-transparent",
                { "border-white": pathname === item.url }
              )}
            >
              <Link href={item.url}>{item.menuItem}</Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="www.youtube.com"
        className="hidden d:flex items-center gap-4 p-2 rounded-xl bg-black-opacity"
      >
        <Icon name="youtube" className="p-2 bg-10 rounded-lg bg-white" />
        Youtube
      </Link>
    </>
  );
};
