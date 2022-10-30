import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";

const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default GlobalRouter;
