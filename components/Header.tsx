import { Image } from "lucide-react";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

const Header = ({user} : {user:User}) => {
  return (
    <header className="sticky top-0  header">
      <div className="main-container header-wrapper">
        <Link href="/">
          <h1 className="text-white font-bold tracking-tighter text-2xl">
            LUMINA
          </h1>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropDown user={user} />
      </div>
    </header>
  );
};

export default Header;
