import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { FaUsers } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span>
              <FaUsers className="text-3xl font-bold text-black" />
            </span>
          </div>

          {/* Navigation Links */}
          <div className=" md:block">
            <div className="flex space-x-5">
              {userInfo ? (
                <>
                  <p className="text-gray-600 hover:text-black px-3 py-2 ">
                    Welcome!{" "}
                    <span className="text-sm font-semibold">
                      {userInfo.name}
                    </span>
                  </p>
                  <Link to="/home">
                    {" "}
                    <p className="text-gray-600 px-3 py-2 flex justify-center items-center font-semibold hover:text-sky-700 hover:font-bold">
                      Home
                    </p>
                  </Link>
                  <Link to="/add-item">
                    {" "}
                    <p className="text-gray-600 px-3 py-2 flex justify-center items-center font-semibold hover:text-sky-700 hover:font-bold">
                      Items
                    </p>
                  </Link>
                  <Link to="/my-bids">
                    {" "}
                    <p className="text-gray-600 px-3 py-2 flex justify-center items-center font-semibold hover:text-sky-700 hover:font-bold">
                      Bids Results
                    </p>
                  </Link>
                  <Link to="/auction-results">
                    {" "}
                    <p className="text-gray-600 px-3 py-2 flex justify-center items-center font-semibold hover:text-sky-700 hover:font-bold">
                      Auction Results
                    </p>
                  </Link>
                  <Link to="/shop">
                    {" "}
                    <p className="text-gray-600 px-3 py-2 flex justify-center items-center font-semibold hover:text-sky-700 hover:font-bold">
                      Shop
                    </p>
                  </Link>
                  <p
                    className="text-gray-600 hover:text-red-600 px-3 py-2 flex justify-center items-center font-semibold"
                    onClick={logoutHandler}
                  >
                    Logout
                    <MdLogout className="ml-1" />
                  </p>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
