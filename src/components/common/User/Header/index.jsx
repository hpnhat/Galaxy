import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import useScroll from "../../../../hooks/useScroll";
import SignIn from "../../../../pages/Auth/SignIn";
const Header = () => {
  const isScrolled = useScroll(110);
  const [openSearch, setOpenSearch] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const formRef = useRef(null);
  useOutsideClick(formRef, () => {
    if (openSearch) setOpenSearch(false);
    if (openForm) setOpenForm(false);
  });
  return (
    <React.Fragment>
      {openForm && (
        <div className="absolute z-40 w-full flex justify-center items-center h-screen bg-black bg-opacity-45">
          <div ref={formRef}>
            <SignIn onClose={() => setOpenForm(false)} />
          </div>
        </div>
      )}
      <header
        className={`w-full z-50 bg-white ${
          isScrolled
            ? "mx-auto container mt-4 transition delay-300 "
            : "absolute"
        }`}
      >
        <div
          className={`flex flex-row justify-between items-center  ${
            isScrolled
              ? "fixed z-50 w-[1536px] bg-white rounded-xl p-2 shadow-2xl  delay-200 duration-300 ease-in-out "
              : " w-full py-4 mx-auto container duration-500 ease-in-out "
          }`}
        >
          <img
            width={115}
            height={60}
            src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
            alt="Logo"
          />
          <div>
            <nav className="flex justify-between items-center *:text-base *:capitalize gap-10">
              <ul>
                <Link>
                  <img
                    width={112}
                    height={36}
                    src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp"
                    alt=""
                  />
                </Link>
              </ul>
              <ul className="hover:text-orange-400 hover:cursor-pointer ">
                Phim
                <FontAwesomeIcon
                  className="ml-2 "
                  icon={faChevronDown}
                  size="2xs"
                />
              </ul>
              <ul className="hover:text-orange-400 hover:cursor-pointer">
                Góc điện ảnh
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faChevronDown}
                  size="2xs"
                />
              </ul>
              <ul className="hover:text-orange-400 hover:cursor-pointer">
                sự kiện
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faChevronDown}
                  size="2xs"
                />
              </ul>
              <ul className="hover:text-orange-400 hover:cursor-pointer">
                Rạp/giá vé
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faChevronDown}
                  size="2xs"
                />
              </ul>
            </nav>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => setOpenSearch(!openSearch)}
              className="cursor-pointer"
            />
            {openSearch && (
              <form
                ref={formRef}
                className="absolute right-0 top-14 w-2/5 flex items-center z-50"
              >
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="...."
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className=" py-2.5 px-3 w-20 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            )}
            <button
              onClick={() => setOpenForm(true)}
              className="text-base capitalize hover:text-orange-400 pl-2"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
