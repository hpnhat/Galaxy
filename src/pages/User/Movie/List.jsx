/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faTicket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
const MovieList = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((movie, index) => (
        <div className="relative m-2" key={index}>
          <div className="relative">
            <img src={movie.url} alt={movie.title} className="rounded-lg" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition rounded-lg">
              <Link
                to={`dat-ve/${movie.slug}`}
                className="m-1 px-4 py-2 text-white rounded border-orange-600 bg-orange-600 hover:bg-orange-400 hover:border-orange-400"
              >
                <FontAwesomeIcon icon={faTicket} /> Mua vé
              </Link>
              <button className="m-1 px-5 py-2 bg-transparent border text-white rounded hover:bg-orange-400 hover:border-orange-400 hover:bg-opacity-50">
                <FontAwesomeIcon icon={faCirclePlay} /> Trailer
              </button>
            </div>
            <div
              style={{
                clipPath: "polygon(12px 0px, 100% 0px, 100% 100%, 0% 100%)",
              }}
              className="absolute flex items-center gap-1 right-0 bottom-16 bg-black bg-opacity-50 w-fit pr-2 pl-4 "
            >
              <FontAwesomeIcon icon={faStar} color="yellow" />
              <p className="text-white font-bold">8.7</p>
            </div>
          </div>
          <Link
            to={`dat-ve/${movie.slug}`}
            className="text-lg font-medium my-2"
          >
            {movie.title}
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
