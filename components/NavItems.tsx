"use client";
import { NAV_ITEMS } from "@/lib/Constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchCommand from "./SearchCommand";

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"; //edgecase
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 px-2  py-1.5 font-medium">
      {NAV_ITEMS.map(({ href, title }) => {
        if (title === "Search")
          return (
            <li key="search-trigger">
              <SearchCommand
                renderAs="text"
                label="Search"
                initialStocks={[]}
              />
            </li>
          );

        return (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-lilac-primary transition-colors ${
                isActive(href) ? "text-gray-100" : ""
              }
                }`}
            >
              {" "}
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
