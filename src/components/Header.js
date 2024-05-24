import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("logintoken");
  let sub;
  if (loginToken) sub = jwtDecode(loginToken)["sub"];

  const handleLogout = () => {
    localStorage.removeItem("logintoken");
    navigate("/");
  };

  // Animation code
  const heartStyle = {
    fontSize: '3em',
    color: '#e00',
    animation: 'beat 0.35s infinite alternate',
    transformOrigin: 'center',
  };

  const keyframes = `
    @keyframes beat {
      to { transform: scale(1.4); }
    }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  // Animation code ends here

  return (
    <nav className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="heart text-red-500" style={heartStyle}>&#x2665;</div>
            <h1 className="text-2xl">Medlink Services</h1>
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex items-center space-x-6 ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/hospital">Beds Availability</NavItem>
          <NavItem to="/appointments">Book Appointment</NavItem>
          <NavItem to="/about">About Us</NavItem>
          <NavItem to="/contact">Contact Information</NavItem>
          {!loginToken ? (
            <NavItem
              to="/login"
              className="btn bg-blue-500 hover:bg-blue-600 text-white"
            >
              Login / SignUp
            </NavItem>
          ) : (
            <li className="text-gray-900 flex items-center space-x-4">
              <span>{sub}</span>
              <button
                onClick={handleLogout}
                className="btn bg-blue-500 hover:bg-blue-600 text-white"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children, className }) => (
  <li className="my-2 lg:my-0">
    <Link
      to={to}
      className={`text-gray-900 hover:text-blue-600 transition duration-300 ${className}`}
    >
      {children}
    </Link>
  </li>
);

export default Header;
