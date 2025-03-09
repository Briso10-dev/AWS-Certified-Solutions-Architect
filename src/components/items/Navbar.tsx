import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AWS Challenges</h1>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/challenges">Challenges</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/challenges">Challenges</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
