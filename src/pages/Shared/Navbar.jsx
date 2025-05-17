import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {

  const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-300 sticky top-0 z-50 border-b ${
          scrolled ? "bg-white text-black border-gray-200" : "bg-[#232F3E] text-white"
        } shadow-md flex justify-between items-center w-full px-3 md:px-6 lg:px-10 py-4`}
      >
        <h1 className="text-2xl max-sm:hidden font-bold font-outfit">
          <span className="text-orange-600">N</span>ovaBuy
        </h1>

        <div className="md:hidden">
          <button className="hover:border p-1" onClick={() => setOpen(!open)}>
            {open ? (
              <IoMdClose className="text-2xl font-bold" />
            ) : (
              <FiMenu className="text-2xl font-bold" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-[15px]">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="relative text-[16px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-orange-600 before:transition-all before:duration-500 hover:before:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Shop"
                  labelIcon={<BookIcon />}
                  onClick={() => navigate("/")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button onClick={openSignIn}>Account</button>
          )}
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 z-40 w-full h-screen transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${scrolled ? "bg-white text-black" : "bg-[#232F3E] text-white"}`}
      >
        <div className="p-6 flex flex-col gap-6 pt-20 text-lg font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="capitalize hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              openSignIn();
              setOpen(false);
            }}
            className="mt-4 w-max border px-4 py-2 rounded-full"
          >
            {user ? "My Account" : "Login / Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
