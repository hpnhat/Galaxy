/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SignUp from "./SignUp";
const SignIn = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <React.Fragment>
      {showSignUp && <SignUp onClose={onClose} />}
      <div
        className={`bg-white  rounded-md p-8 relative ${
          showSignUp ? "hidden" : "block"
        }`}
      >
        <FontAwesomeIcon
          onClick={() => onClose()}
          icon={faXmark}
          className="absolute right-5 cursor-pointer"
        />
        <img
          src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
          alt=""
          className="mx-8"
        />
        <p className="capitalize font-medium text-lg text-center my-2">
          đăng nhập tài khoản
        </p>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Password
                </label>
                <a
                  href="#!"
                  className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              Bạn chưa có tài khoản ?
              <button
                onClick={() => setShowSignUp(true)}
                className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800 ml-2"
              >
                Đăng ký
              </button>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
