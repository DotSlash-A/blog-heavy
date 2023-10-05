import React from "react";
import "./style.css";

export default function index() {
  return (
    <nav className="vercel-dark border-gray-200 dark:vercel-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm vercel-dark rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg"
              alt="user photo"
            />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg vercel-dark md:flex-row md:space-x-8 md:mt-0 md:border-0 md:vercel-dark dark:vercel-dark md:dark:vercel-dark dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white vercel-dark rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:vercel-dark md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-gray-500 md:dark:hover:text-gray-300 dark:hover:vercel-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Create Post
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:vercel-dark md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-gray-500 md:dark:hover:text-gray-300 dark:hover:vercel-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:vercel-dark md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:text-gray-500 md:dark:hover:text-gray-300 dark:hover:vercel-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
