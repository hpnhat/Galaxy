import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/User/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import MovieDetail from "../pages/User/Movie/Detail";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dat-ve/:slug" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
