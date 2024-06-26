import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo/Logo.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickHome = () => {
    const HomeSection = document.getElementById("hero");
    if (HomeSection) {
      const scroll = HomeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickMarket = () => {
    const MarketSection = document.getElementById("market");
    if (MarketSection) {
      const scroll = MarketSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickChooseUs = () => {
    const ChooseUsSection = document.getElementById("whyChooseUs");
    if (ChooseUsSection) {
      const scroll = ChooseUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickJoin = () => {
    const JoinSection = document.getElementById("join");
    if (JoinSection) {
      const scroll = JoinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3 px-6 lg:px-20 bg-opacity-0 bg-gradient-to-b from-slate-800 to-black hover:shadow-lg hover:shadow-lime-400 duration-1000">
      <div className="container flex items-center justify-between">
        <NavLink to={"/"}>
          <div
            className={`${isMenuOpen ? "hidden" : "flex items-center"}`}
            onClick={() => {
              handleClickHome();
            }}
          >
            <Logo />
          </div>
        </NavLink>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-center space-y-3"
              : "flex flex-row items-center lg:space-x-6 transition-all duration-300 ease-in-out mr-4 xl:mr-8"
          }`}
        >
          <li
            onClick={toggleMenu}
            className={`text-white font-semibold text-xl hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-2 right-2 lg:top-10 lg:right-10"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </li>
          <NavLink to={"/"}>
            <li
              className={`text-white font-semibold text-xl hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block ${
                isMenuOpen ? "block mb-4" : "hidden"
              } `}
              onClick={() => {
                handleClickHome();
                closeMenu();
              }}
            >
              Home
            </li>
          </NavLink>
          <NavLink to={"/"}>
            <li
              className={`text-white font-semibold text-xl hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block ${
                isMenuOpen ? "block mb-4" : "hidden"
              } `}
              onClick={() => {
                setTimeout(() => handleClickMarket(), 100);
                closeMenu();
              }}
            >
              Market
            </li>
          </NavLink>
          <NavLink to={"/"}>
            <li
              className={`text-white font-semibold text-xl hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block ${
                isMenuOpen ? "block mb-4" : "hidden"
              }`}
              onClick={() => {
                setTimeout(() => handleClickChooseUs(), 100);
                closeMenu();
              }}
            >
              Choose Us
            </li>
          </NavLink>
          <NavLink to={"/"}>
            <li
              className={`text-white font-semibold text-xl hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block ${
                isMenuOpen ? "block mb-4" : "hidden"
              } `}
              onClick={() => {
                setTimeout(() => handleClickJoin(), 100);
                closeMenu();
              }}
            >
              Join
            </li>
          </NavLink>
          <li className={`lg:block ${isMenuOpen ? "block mb-4" : "hidden"} `}>
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-discord-filled text-white cursor-pointer mx-2 transition-all ease-in-out duration-300 hover:scale-125"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-x cursor-pointer mx-2 transition-all ease-in-out duration-300 hover:scale-125"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
