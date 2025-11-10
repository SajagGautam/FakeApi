import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Platzi Fake Store
      </Link>
      <div className="flex gap-6 text-lg">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:opacity-80"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:opacity-80"
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
