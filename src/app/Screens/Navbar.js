import React from "react";
import "./Style.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Add your navigation links here */}
        <a href="#" className="nav-link active">
          About
        </a>
        <a href="#" className="nav-link">
          Constructor
        </a>
        <a href="#" className="nav-link">
          Reviews
        </a>
      </nav>
    </>
  );
}
