const NavLinks = ({ links }) => {
  return (
    <div className="flex gap-4">
      {links.map((link, i) => {
        return (
          <a
            href={link.route}
            key={i}
            className={` font-medium text-lg xl:text-xl`}
          >
            {link.header}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
