/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SignIn from "./SignIn";
const SignUp = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <React.Fragment>
      {showSignIn && <SignIn onClose={onClose} />}
      <div
        className={`bg-white  rounded-md p-8 relative ${
          showSignIn ? "hidden" : "block"
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
          đăng ký tài khoản
        </p>
        <div action="">
          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Họ và tên
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên..."
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@gmail.com"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Nhập số điện thoại"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Giới tính
            </label>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                <label htmlFor="male" className="text-gray-700">
                  Nam
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                <label htmlFor="female" className="text-gray-700">
                  Nữ
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="unknown"
                  name="gender"
                  value="unknown"
                  className="mr-2"
                />
                <label htmlFor="unknown" className="text-gray-700">
                  Chưa xác định
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="birthDate"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Ngày sinh
            </label>
            <input
              type="date"
              name="birthDate"
              placeholder="Ngày / Tháng / Năm"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
            >
              Đăng ký
            </button>
          </div>
          <p className="text-sm text-center text-gray-400">
            Bạn đã có tài khoản ?
            <button
              onClick={() => setShowSignIn(true)}
              className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800 ml-2"
            >
              Đăng nhập
            </button>
            .
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
