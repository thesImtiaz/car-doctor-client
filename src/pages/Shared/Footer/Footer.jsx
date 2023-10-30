import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GrGoogle } from "react-icons/gr";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer p-14 bg-[#151515] text-base-content">
      <aside>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="h-16 w-20" />
        </NavLink>
        <p className="text-white text-base font-normal">
          Edwin Diaz is a software and web
          <br />
          technologies engineer, a life coach
          <br />
          trainer who is also a serial .
        </p>

        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2C2C2C] hover:bg-[#FF3811] cursor-pointer">
            <GrGoogle className="text-white h-4 w-4" />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2C2C2C] hover:bg-[#FF3811] cursor-pointer">
            <FaXTwitter className="text-white h-4 w-4" />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2C2C2C] hover:bg-[#FF3811] cursor-pointer">
            <FaInstagram className="text-white h-4 w-4" />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2C2C2C] hover:bg-[#FF3811] cursor-pointer">
            <BsLinkedin className="text-white h-4 w-4" />
          </div>
        </div>
      </aside>
      <nav>
        <header className="text-white text-xl font-semibold">About</header>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Home
        </a>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Service
        </a>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Contact
        </a>
      </nav>
      <nav>
        <header className="text-white text-xl font-semibold">Company</header>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Why Car Doctor
        </a>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          About
        </a>
      </nav>
      <nav>
        <header className="text-white text-xl font-semibold">Support</header>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Support Center
        </a>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Feedback{" "}
        </a>
        <a className="text-white text-base font-normal hover:text-[#FF3811] hover:underline cursor-pointer">
          Accessability
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
