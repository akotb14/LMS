import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuToggleRequest, setMenuToggleRequest] = useState(false);
  // const [activeRequest, setActiveRequest] = useState(true);
  const [url , setUrl] = useState("course")
  const ActiveHandler = (urlName) => {
    setUrl(urlName)
  }
  const menuToggleHandler = () => {
    setMenuToggle(!menuToggle);
  };
  const menuToggleRequestHandler = (urlName) => {
    setMenuToggleRequest(!menuToggleRequest);
    setUrl(urlName)
  };
  return (
    <nav style={{ backgroundColor: "#27374D" }} >
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 w-full items-center justify-between">
          <div className="text-[2.2rem] px-3 font-bold w-[25%] max-sm:align-center max-sm:w-full flex max-sm:justify-center">
            <h1 className="text-white">LMS</h1>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div  className="flex space-x-4">
                <Link
                  to="/"
                   className={( url === "course") ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :"text-white hover:bg-gray-700 hover:text-white rounded-md  px-3 py-2 text-sm font-medium"}
                   onClick={()=>ActiveHandler("course")}
                >
                  <li>Course</li>
                </Link>
                <div >
                  <button   className={( url === "requests") ? "bg-gray-900text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium inline-flex gap-2 items-center" :"text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium inline-flex gap-2 items-center"}
                   onClick={()=>menuToggleRequestHandler("requests")}>
                    Requests
                    <svg
                      className="hs-dropdown-open:rotate-180 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {menuToggleRequest &&<div
                    className="absolute z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="request-menu-button"
                    tabindex="-1"
                  >
                    <Link
                  to="/RequestCourse"
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                  >
                  <li>Request Course</li>
                </Link>
                <Link
                  to="/RequestBook"
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                >
                  <li>Request Book</li>
                </Link>
                  </div>}
                </div>
                
                <Link
                  to="/Assignment"
                  className={( url === "assignment") ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :"text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}
                  onClick={()=>ActiveHandler("assignment")}                >
                  <li>Assignment</li>
                </Link>
                <Link
                  to="/Quiz"
                  className={(url === "quiz") ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :"text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}
                  onClick={()=>ActiveHandler("quiz")}                >
                  <li>Quiz</li>
                </Link>
                <Link
                  to="/Result"
                  className={( url === "result") ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :"text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}
                  onClick={()=>ActiveHandler("result")}                >
                  <li>Result</li>
                </Link>
                <Link
                  to="/Student"
                  className={( url === "student") ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :"text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}
                  onClick={()=>ActiveHandler("student")}                >
                  <li>Student</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-haspopup="true"
                  onClick={() => menuToggleHandler()}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {menuToggle && (
                <div
                  className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <Link
                    to="/"
                    className="block  px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Rasha
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link 
          
            to="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Course</li>
          </Link>
          <Link
            to="/RequestCourse"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Request Course</li>
          </Link>
          <Link
            to="/RequestBook"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Request Book</li>
          </Link>
          <Link
            to="/Assignment"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Assignment</li>
          </Link>
          <Link
            to="/Quiz"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Quiz</li>
          </Link>
          <Link
            to="/Result"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Result</li>
          </Link>
          <Link
            to="/Student"
            className="text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <li>Student</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
