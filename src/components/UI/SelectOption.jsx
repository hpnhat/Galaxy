/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const SelectOption = ({ title, data, number }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState("");
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    if (openSelect) setOpenSelect(false);
  });

  return (
    <>
      <div className="relative p-2">
        <button
          className={`bg-white w-full text-left p-2 border-none flex flex-row items-center`}
          onClick={() => setOpenSelect(!openSelect)}
        >
          <span className="bg-orange-400 px-1 mr-2 text-white text-xs">
            {number}
          </span>
          <span className="truncate ">
            {selected === "" ? title : selected}
          </span>
        </button>
        <ul
          ref={selectRef}
          className={`z-50 absolute mt-1 w-full  bg-gray-50 ring-1 ring-gray-300 ${
            openSelect ? "block" : "hidden"
          }`}
        >
          {data.map((value, index) => (
            <li
              key={index}
              className="cursor-pointer select-none p-2 hover:bg-gray-200"
              onClick={() => {
                setSelected(value);
                setOpenSelect(false);
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectOption;
