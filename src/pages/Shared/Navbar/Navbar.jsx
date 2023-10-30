import logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#444] text-lg font-semibold"
            : ""
        }
      >
        <li className="hover:text-[#FF3811] hover:underline hover:transition hover:duration-500 cursor-pointer">
          Home
        </li>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#444] text-lg font-semibold"
            : ""
        }
      >
        <li className="hover:text-[#FF3811] hover:underline hover:transition hover:duration-500 cursor-pointer">
          About
        </li>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#444] text-lg font-semibold"
            : ""
        }
      >
        <li className="hover:text-[#FF3811] hover:underline hover:transition hover:duration-500 cursor-pointer">
          Service
        </li>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#444] text-lg font-semibold"
            : ""
        }
      >
        <li className="hover:text-[#FF3811] hover:underline hover:transition hover:duration-500 cursor-pointer">
          Blog
        </li>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#444] text-lg font-semibold"
            : ""
        }
      >
        <li className="hover:text-[#FF3811] hover:underline hover:transition hover:duration-500 cursor-pointer">
          Contact
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink>
          <img src={logo} alt="logo" className="h-14 w-20" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-lg font-semibold text-[#FF3811] normal-case border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811]">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
