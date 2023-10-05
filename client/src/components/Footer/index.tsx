import React from "react";
import "./style.css";

export default function index() {
  return (
    <nav className="vercel-dark dark:vercel-dark">
      <div className="flex flex-wrap justify-between items-center justify-between mx-auto p-10">
        <div className="flex items-center md:order-2">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg vercel-dark md:flex-row md:space-x-8 md:mt-0 md:border-0 md:vercel-dark dark:vercel-dark md:dark:vercel-dark dark:border-gray-700">
            <li>
              <p className="block py-2 pl-3 pr-4 text-white vercel-dark rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white">
                Trying to clone <strong>Ghost</strong>
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-white vercel-dark rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white">
              •
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-white vercel-dark rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white">
              Theme <strong>Atilla</strong>
              </p>
            </li>
          </ul>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg vercel-dark md:flex-row md:space-x-8 md:mt-0 md:border-0 md:vercel-dark dark:vercel-dark md:dark:vercel-dark dark:border-gray-700">
            <li>
              <p className="block py-2 pl-3 pr-4 text-white vercel-dark rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white">
                Atilla &copy; 2023
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
