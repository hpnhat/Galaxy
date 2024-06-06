import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  banners,
  films,
  promotionalNew,
  selectDate,
  selectFilm,
  selectTime,
} from "../../../../data.example";
import SelectOption from "../../../components/UI/SelectOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../Movie/List";
import { banner, promotionalNews } from "../../../../systems/ultis/Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="relative pt-24">
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={banner}
        >
          {banners.map((url, index) => (
            <img key={index} src={url.url} alt={url.title} />
          ))}
        </Carousel>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[24px] xl:grid grid-cols-11 border bg-white shadow-2xl rounded-sm max-w-6xl w-full hidden md:hidden lg:hidden">
          <div className="col-span-3">
            <SelectOption title={"Chọn phim"} data={selectFilm} number={1} />
          </div>
          <div className="col-span-3">
            <SelectOption title={"Chọn ngày"} data={selectDate} number={2} />
          </div>
          <div className="col-span-3">
            <SelectOption title={"Chọn suất"} data={selectTime} number={3} />
          </div>
          <div className="col-span-2">
            <button className="w-full h-full bg-orange-500">
              Mua vé nhanh
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row items-center  gap-8 mt-10 -z-10">
          <span className="border-l-4 border-blue-800 text-2xl font-medium hidden lg:block uppercase">
            &ensp; Phim
          </span>
          <span className="text-blue-800 font-semibold relative">
            Đang chiếu
            <p className="border-b-2 border w-8 border-blue-800 absolute translate-x-1/2 left-3"></p>
          </span>
          <span className="text-gray-500 font-semibold hover:text-blue-500 cursor-pointer ">
            Sắp chiếu
          </span>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 grid-cols-2 gap-4 ">
          <MovieList data={films} />
        </div>
        <div className="text-center">
          <p className="border border-orange-500 py-2 px-10 inline-flex justify-center items-center text-orange-500 transition-all hover:bg-orange-500 hover:text-white cursor-pointer rounded-sm">
            Xem thêm
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" size="sm" />
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <span className="border-l-4 border-blue-800 text-2xl font-medium hidden lg:block uppercase mb-10">
          &ensp; Tin tức khuyến mại
        </span>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={promotionalNews}
        >
          {promotionalNew.map((v, index) => (
            <Link key={index}>
              <div className="mx-4 text-center">
                <img src={v.url} alt={v.title} />
                <p className="font-medium text-base mt-2">{v.title}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto">
        <span className="border-l-4 border-blue-800 text-2xl font-medium hidden lg:block uppercase mb-10">
          &ensp; Trang chủ
        </span>
        <div>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              <a href="https://www.galaxycine.vn/">
                <b>Galaxy Cinema</b>
              </a>
              &nbsp;là một trong những công ty tư nhân đầu tiên về điện ảnh được
              thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa
              điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp
              chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,{" "}
              <a href="https://www.galaxycine.vn/">
                <b>Galaxy Cinema</b>
              </a>{" "}
              còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng
              dịch vụ hàng đầu.
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              Đến website{" "}
              <a href="https://www.galaxycine.vn/">
                <i>galaxycine.vn</i>
              </a>
              , khách hàng&nbsp;sẽ dễ dàng tham khảo các{" "}
              <a href="https://www.galaxycine.vn/phim-dang-chieu">
                <i>phim hay nhất</i>
              </a>
              ,&nbsp;
              <a href="https://www.galaxycine.vn/phim-dang-chieu">
                <i>phim mới nhất</i>
              </a>{" "}
              đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên.{" "}
              <a href="https://www.galaxycine.vn/lich-chieu">
                <i>Lịch chiếu</i>
              </a>{" "}
              tại tất cả hệ thống{" "}
              <a href="https://www.galaxycine.vn/">
                <i>rạp chiếu phim</i>{" "}
              </a>
              của{" "}
              <a href="https://www.galaxycine.vn/">
                <b>Galaxy Cinema</b>
              </a>{" "}
              cũng được cập nhật đầy đủ hàng ngày hàng giờ trên<i> trang chủ</i>
              .{" "}
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              Giờ đây đặt vé tại{" "}
              <b>
                <a href="https://www.galaxycine.vn/">Galaxy Cinema</a>&nbsp;
              </b>
              càng thêm dễ dàng chỉ với&nbsp;vài thao tác vô cùng đơn giản. Để
              mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo
              phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các
              bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin
              nhắn và email phản hồi <i>Đặt vé thành công</i> của{" "}
              <a href="https://www.galaxycine.vn/">
                <b>Galaxy Cinema</b>
              </a>
              . Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của
              <a href="https://www.galaxycine.vn/">
                {" "}
                <b>Galaxy Cinema</b>
              </a>{" "}
              hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ
              công đoạn nào nữa.
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              Nếu bạn đã chọn được{" "}
              <a href="https://www.galaxycine.vn/phim-dang-chieu">
                <i>phim hay</i>
              </a>{" "}
              để xem, hãy đặt vé cực nhanh bằng box <i>Mua Vé Nhanh</i> ngay từ{" "}
              <a href="https://www.galaxycine.vn/">
                <i>Trang Chủ</i>
              </a>
              . Chỉ cần một phút, tin nhắn và email phản hồi của{" "}
              <b>
                <a href="https://www.galaxycine.vn/">Galaxy Cinema</a>{" "}
              </b>
              sẽ gửi ngay vào điện thoại và hộp mail của bạn.{" "}
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              Nếu chưa quyết định sẽ xem <i>phim mới</i> nào, hãy tham khảo các
              bộ
              <a href="https://www.galaxycine.vn/phim-dang-chieu">
                {" "}
                <i>phim hay</i>
              </a>{" "}
              trong mục
              <a href="https://www.galaxycine.vn/phim-dang-chieu">
                {" "}
                <i>Phim Đang Chiếu</i>
              </a>{" "}
              cũng như{" "}
              <a href="https://www.galaxycine.vn/phim-sap-chieu">
                <i>Phim Sắp Chiếu</i>{" "}
              </a>
              tại{" "}
              <a href="https://www.galaxycine.vn/">
                <i>rạp chiếu phim</i>
              </a>{" "}
              bằng cách vào mục{" "}
              <a href="https://www.galaxycine.vn/binh-luan-phim">
                <i>Bình Luận Phim</i>
              </a>{" "}
              ở{" "}
              <i>
                <a href="http://beta.galaxycine.vn/dien-anh">Góc Điện Ảnh</a>{" "}
              </i>
              để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc.
              Sau đó, chỉ việc&nbsp;đặt vé bằng box <i>Mua Vé Nhanh</i> ngay ở
              đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất. &nbsp;
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              <a href="https://www.galaxycine.vn/">
                <b>Galaxy Cinema</b>
              </a>{" "}
              luôn có những chương trình
              <a href="https://www.galaxycine.vn/khuyen-mai">
                {" "}
                <i>khuyến mãi</i>, <i>ưu đãi</i>
              </a>
              , quà tặng vô cùng hấp dẫn như <i>giảm giá</i> vé, tặng vé xem
              phim miễn phí, tặng Combo, tặng quà phim… &nbsp;dành cho các khách
              hàng.
            </span>
          </p>
          <p className="mt-0 mr-0 mb-2.5 ml-0 text-justify">
            <span className="text-[14px] font-sans">
              Trang web <i>galaxycine.vn</i> còn có mục <i>Góc Điện Ảnh</i> -
              nơi lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết
              chuyên sâu về điện ảnh, hỗ trợ người yêu phim&nbsp;dễ dàng hơn
              trong việc lựa chọn phim và bổ sung thêm kiến thức về điện ảnh cho
              bản thân. Ngoài ra, vào mỗi tháng,{" "}
              <a href="https://www.galaxycine.vn/">
                <strong>Galaxy Cinema</strong>{" "}
              </a>
              cũng giới thiệu các{" "}
              <a href="https://www.galaxycine.vn/phim-sap-chieu">
                <i>phim sắp chiếu</i>
              </a>{" "}
              hot nhất trong mục{" "}
              <a href="https://www.galaxycine.vn/phim-hay">
                <i>Phim Hay Tháng</i>&nbsp;
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
