import Header from "../components/common/User/Header/index.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/User/Footer/index.jsx";
const UserLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
