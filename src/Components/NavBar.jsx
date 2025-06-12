import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = ({NavLinks}) => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔐 Hardcoded login status
  const isLoggedIn = false; // Set to false to show "Login" instead

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
         <img className="w-[120px] md:w-[250px]" src="https://i.ibb.co/HDbhRw0k/logo.png" alt="" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {NavLinks}
        </ul>

        {/* Login/Logout Button */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4">
          {NavLinks}
          <li>
            {isLoggedIn ? (
              <button
                className="bg-red-500 text-white w-full text-center px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-600 text-white w-full text-center px-4 py-2 rounded hover:bg-green-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
