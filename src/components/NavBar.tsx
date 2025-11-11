import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type{ RootState } from "../app/store";
import { logout } from "../features/authSlices";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  let authButton;
  if (user) {
    authButton = (
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    );
  } else {
    authButton = (
      <Link
        to="/login"
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Login
      </Link>
    );
  }

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Left - Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyStore 🛍️
        </Link>

        {/* Center - Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-200 transition">
            Products
          </Link>
        </div>

        {/* Right - Auth Button */}
        <div>{authButton}</div>
      </div>
    </nav>
  );
};

export default Navbar;
