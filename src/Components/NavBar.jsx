import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import useAuth from "../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const Navbar = ({ NavLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user,logOut } = useAuth();
  const [clicked, setClicked] = useState(false)


  const handleTogleBtn = () => {
    setClicked(true)
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successful")
      })
      .catch((error) => {
        toast.error('something problem')
      })
    
  }

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


          {user ? (
            !clicked ? <img className="w-[80px] h-[80px] object-cover object-center rounded-full" onClick={handleTogleBtn} src={user?.photoURL} alt="profile img" /> : <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
          ) :
            (<Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</Link>)}


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
        <ul onClick={()=>setIsOpen(false)} className="md:hidden px-4 pb-4 flex flex-col gap-4">
          {NavLinks}
          <li>
            {user ? (
            !clicked ? <div className=""><img  className="w-[100px] h-[100px] object-cover object-center rounded-full" onClick={handleTogleBtn} src={user?.photoURL} alt="profile img" /></div> : <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
          ) :
            (<Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</Link>)}
          </li>
        </ul>
      )}
    <ToastContainer></ToastContainer>
    </nav>
  );
};

export default Navbar;
