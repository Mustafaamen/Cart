import React, { useContext, useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { NameContext } from "../context/NameContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function Navbar() {
  let { cartCount, setTokenStatus, tokenStatus } = useContext(CartContext);
  let { wishlistCount } = useContext(WishlistContext);
  let { userData, setUserData } = useContext(NameContext);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <nav className="py-2 z-50 bg-gray-200 capitalize text-gray-500 md:fixed md:top-0 md:end-0 md:start-0">
        <div className="container  flex flex-wrap md:flex-nowrap justify-between items-center md:space-x-2">
          <div className="logo">
            <img src={logo} className="w-36" alt="logo" />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="icon md:hidden cursor-pointer"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div
            className={` ${
              open ? "flex" : "hidden"
            } md:flex  flex-col md:flex-row justify-between items-center basis-full`}
          >
            <div className="flex  flex-col md:flex-row justify-center items-center md:space-x-2">
              {userData && (
                <ul className="flex flex-col md:flex-row justify-center   items-center md:space-x-3 ">
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="">
                      home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="products">
                      products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="categories">
                      categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="brands">
                      brands
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-2 ">
              {userData && (
                <>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="cart">
                      <i className="fa-solid fa-xl fa-cart-shopping relative text-mainColor">
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-6 -start-4 dark:border-gray-900">{tokenStatus && cartCount ? cartCount : 0} </div>

                      </i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="wishlist">
                      <i className="fa-solid fa-heart text-red-500 text-3xl relative">
                        <span className="absolute top-[9px] left-1/2 -translate-x-1/2 text-xs text-white">
                          {tokenStatus && wishlistCount ? wishlistCount : 0}
                        </span>
                      </i>
                    </NavLink>
                  </li>
                </>
              )}

              <li className="space-x-2 text-black">
                <a target="blank" href="https://www.facebook.com/elhdad20155/">
                  <i className="ml-2 fa-beat-fade fab text-blue-700 fa-facebook-f cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="www.linkedin.com/in/mustafa-elhadad-525839279"
                >
                  <i className="ml-2 fa-beat-fade fab text-blue-900 fa-linkedin-in cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/watch?v=amW0_rbM3ag"
                >
                  <i className="ml-2 fa-beat-fade fab text-red-600 fa-youtube cursor-pointer"></i>
                </a>
                <a target="blank" href=" https://github.com/Mustafaamen">
                  <i className=" ml-2 fa-beat-fade fab fa-github cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/muelhadad1/"
                >
                  <i className=" ml-2 fa-beat-fade fab text-red-300 fa-instagram cursor-pointer"></i>
                </a>
              </li>
              {userData ? (
                <li className="mt-5 md:mt-0">
                  <span
                    className="cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                    onClick={() => {
                      setOpen(false);
                      localStorage.removeItem("userToken");
                      setUserData(null);
                      navigate("login");
                      setTokenStatus(false);
                    }}
                  >
                    logout
                    
                  </span>
                </li>
              ) : (
                <>
                  <li className="mt-5 md:mt-0">
                    <NavLink className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => setOpen(false)} to="login">
                      login
                    </NavLink>
                  </li>
                  <li className="mt-5 md:mt-0">
                    <NavLink className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setOpen(false)} to="register">
                      register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
