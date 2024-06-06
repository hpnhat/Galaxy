import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { films } from "../../../../data.example";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { dayAndMonth, formatDate } from "../../../../systems/ultis/FormatDate";

const MovieDetail = () => {
  const { slug } = useParams();
  const [preview, setPreview] = useState(false);
  const [selectSchedule, setSelectSchedule] = useState(0);
  const movie = films.find((movie) => movie.slug === slug);
  const formRef = useRef(null);
  useOutsideClick(formRef, () => {
    if (preview) setPreview(false);
  });
  useEffect(() => {
    if (preview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [preview]);
  return (
    <React.Fragment>
      {preview && (
        <React.Fragment>
          <div className="absolute bg-black w-full h-screen z-50 opacity-50 transition-all"></div>
          <div
            ref={formRef}
            className="preview absolute w-10/12 h-[80vh] z-50 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 transition-all"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NniWrbnDuy4?si=258CmCAfv7nuAHTz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </React.Fragment>
      )}
      <div className="relative bg-black w-full flex justify-center">
        <div className="relative">
          <img src={movie.banner} alt="" />
          <button
            onClick={() => setPreview(!preview)}
            className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
          >
            <img
              width={64}
              height={64}
              src="https://cdn-icons-png.flaticon.com/512/0/375.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-8 relative">
          <div className="border border-white lg:-translate-y-20 md:-translate-y-16 -translate-y-0 col-span-1 drop-shadow-2xl z-20">
            <img
              width={220}
              height={280}
              src={movie.url}
              alt={movie.title}
              className='border-2 rounded border-white lg:w-[280px] lg:h-[400px] w-full h-full object-cover duration-500 ease-in-out group-hover:opacity-100"
              scale-100 blur-0 grayscale-0)'
            />
          </div>
          <div className="col-span-2 lg:-translate-y-20 flex flex-col justify-end md:-translate-y-16 -translate-y-0 gap-2">
            <h3 className="font-medium text-3xl">{movie.title}</h3>
            <span className="flex gap-2">
              <p className="font-normal">
                <FontAwesomeIcon icon={faClock} color="orange" /> 101 Phút
              </p>
              <p className="font-normal">
                <FontAwesomeIcon icon={faCalendar} color="orange" /> 31/5/2024
              </p>
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faStar}
                color="orange"
                size="lg"
                className="mr-1"
              />
              <p className="text-xl font-normal">9.5</p>
            </span>
            <span>Quốc gia: Mỹ</span>
            <p>Nhà sản xuất: Tao</p>
            <div className="flex items-center">
              <p>Thể loại: </p>
              <span className="flex gap-1 ml-3">
                {["Hoạt hình", "Hài", "Phiêu Lưu"].map((v, i) => (
                  <p
                    key={i}
                    className="capitalize border border-gray-400 rounded-md py-1 px-5"
                  >
                    {v}
                  </p>
                ))}
              </span>
            </div>
            <div className="flex items-center">
              <p>Đạo diễn: </p>
              <span className="flex gap-1 ml-3">
                {["John Ưick"].map((v, i) => (
                  <p
                    key={i}
                    className="capitalize border border-gray-400 rounded-md py-1 px-5"
                  >
                    {v}
                  </p>
                ))}
              </span>
            </div>
            <div className="flex items-center">
              <p>Diễn viên: </p>
              <span className="flex gap-1 ml-3">
                {["meo meo", "Đom đóm", "Trịnh trần phương tuấn"].map(
                  (v, i) => (
                    <p
                      key={i}
                      className="capitalize border border-gray-400 rounded-md py-1 px-5"
                    >
                      {v}
                    </p>
                  )
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <span className="border-l-4 border-blue-800 lg:text-2xl font-medium text-sm uppercase">
            &ensp; Nội dung Phim
          </span>
          <p className="mt-3">
            Trong bộ phim hoạt hình này, chú mèo mê đồ ăn Garfield bị cuốn vào
            một vụ trộm để giúp cha mình - một tên trộm đường phố, khỏi một chú
            mèo biểu diễn khác đang muốn trả thù ông. Bắt đầu như một mối quan
            hệ hợp tác miễn cưỡng và kết thúc bằng việc Garfield và Vic nhận ra
            rằng cha con họ không hề khác biệt như vẻ ngoài của mình.
          </p>
        </div>
        <div>
          <span className="border-l-4 border-blue-800 lg:text-2xl font-medium text-sm uppercase">
            &ensp; Lịch chiếu
          </span>
          <div className="flex gap-3 border-b border-blue-700 bor">
            {movie.movieSchedule.map((v, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-gray-500 p-2 rounded-md w-[80px] cursor-pointer ${
                  selectSchedule == i && "bg-blue-900 text-white"
                }`}
                onClick={() => setSelectSchedule(i)}
              >
                <span>{formatDate(v)}</span>
                <span>{dayAndMonth(v)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
