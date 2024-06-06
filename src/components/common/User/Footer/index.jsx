import { Link } from "react-router-dom";
const footerData = [
  "Về chúng tôi",
  "Thỏa thuận sử dụng",
  "Quy chế hoạt động",
  "Chính sách bảo mật",
];
const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-around">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Giới thiệu</h5>
            <ul className="list-none footer-links">
              {footerData.map((v, index) => (
                <li key={index} className="mb-2">
                  <Link className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                    {v}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Góc điện ảnh</h5>
            <ul className="list-none footer-links">
              {footerData.map((v, index) => (
                <li key={index} className="mb-2">
                  <Link className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                    {v}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Hỗ trợ</h5>
            <ul className="list-none footer-links">
              {footerData.map((v, index) => (
                <li key={index} className="mb-2">
                  <Link className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                    {v}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
          </div>
        </div>
        <div className=" sm:-mx-4 mt-6 pt-6  border-t">
          <div className="w-full px-4 flex gap-2">
            <img
              width="115"
              height="60"
              src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
              alt="Logo"
            />
            <span className="w-full">
              <strong>Công ty cổ phần Hehe</strong>
              <p>Tòa nhà hehe</p>
              <a href="tel:123123">123123</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
