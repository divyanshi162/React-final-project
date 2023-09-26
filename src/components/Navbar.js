import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-8 px-16 py-4 bg-[#5bc0de]">
      <Link to="/">
        <p className="text-white">Home</p>
      </Link>
      <Link to="/courses">
        <p className="text-white">Courses</p>
      </Link>
      <Link to="/about">
        <p className="text-white">About</p>
      </Link>
    </div>
  );
};

export default Navbar;
