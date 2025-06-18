import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import NavLinks from "./NavLinks";

const HeaderComponent = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="font-primary max-w-5xl w-11/12 m-auto h-20 flex items-center justify-end">
      <div className={`hidden md:flex `}>
        <NavLinks
          links={[
            { route: "/", header: "Home" },
            { route: "/Blog", header: "Blog" },
            { route: "/Works", header: "Works" },
            { route: "/Skills", header: "Skills" },
            { route: "/Contact", header: "Contact" },
          ]}
        />
      </div>
      <div
        onClick={handleOpenNav}
        className="cursor-pointer border border-primaryBrand rounded z-20 fixed  right-3  md:hidden"
      >
        {!openNav ? (
          <IoMenuOutline className="text-primaryBrand text-2xl md:text-3xl" />
        ) : (
          <MdOutlineClose className="text-primaryBrand text-2xl md:text-3xl"/>
        )}
      </div>
      <div
        className={`${
          !openNav ? "translate-x-24" : "translate-x-0"
        } flex  flex-col fixed top-0 bottom-0 h-full right-0 pt-14 w-24 bg-white z-10 shadow shadow-gray-300 cursor-pointer transition ease-in-out duration-500 `}
      >
        <a
          className="flex items-center hover:bg-[#FF6464] transition ease-in-out duration-500 h-10 pl-2 font-medium text-lg"
          href="/"
        >
          Home
        </a>
        <a
          className="flex items-center hover:bg-[#FF6464] transition ease-in-out duration-500 h-10 pl-2 font-medium text-lg"
          href="/Works"
        >
          Works
        </a>
        <a
          className="flex items-center hover:bg-[#FF6464] transition ease-in-out duration-500 h-10 pl-2 font-medium text-lg"
          href="/Blog"
        >
          Blog
        </a>
        <a
          className="flex items-center hover:bg-[#FF6464] transition ease-in-out duration-500 h-10 pl-2 font-medium text-lg"
          href="/Skills"
        >
          Skills
        </a>
        <a
          className="flex items-center hover:bg-[#FF6464] transition ease-in-out duration-500  h-10 pl-2 font-medium text-lg"
          href="/Contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default HeaderComponent;
