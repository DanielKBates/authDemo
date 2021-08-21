import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/login"
                >
                  <span className="ml-2">Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
