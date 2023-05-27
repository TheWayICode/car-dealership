import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCar } from "react-icons/bi";
import { AiOutlineSchedule, AiOutlineDollarCircle, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);
  const [firstDropdownVisible, setfirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setsecondDropdownVisible] = useState(false);
  const [appointmentDropdownVisible, setAppointmentDropdownVisible] = useState(false);
  const firstDropdownRef = useRef(null);
  const secondDropdownRef = useRef(null);
  const appointmentDropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      setTimeout(() => {
        setNav(false);
      }, 4000);
    }
  };
  const handlefirstDropdownToggle = () => {
    setfirstDropdownVisible(!firstDropdownVisible);
  };
  const handlesecondDropdownToggle = () => {
    setsecondDropdownVisible(!secondDropdownVisible);
  };
  const handleAppointmentDropdownToggle = () => {
    setAppointmentDropdownVisible(!appointmentDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (
      firstDropdownRef.current &&
      !firstDropdownRef.current.contains(event.target)
    ) {
      setfirstDropdownVisible(false);
    }
    if (
      secondDropdownRef.current &&
      !secondDropdownRef.current.contains(event.target)
    ) {
      setsecondDropdownVisible(false);
    }
    if (
      appointmentDropdownRef.current &&
      !appointmentDropdownRef.current.contains(event.target)
    ) {
      setAppointmentDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:px-32 md:px-16 sm:px-6 px-4 sticky top-0 z-10 w-full h-28 flex justify-between items-center bg-gray-900 text-gray-200">
      <Link
        to="/"
        className="ml-16 animate-bounce animate-once text-5xl font-bold hover:text-green-200"
      >
        <FaHome />
      </Link>
      <ul className="md:flex hidden">
        <li className="p-4 mr-4 font-bold text-xl relative">
          <button
            className="hover:text-green-200 focus:text-green-200 flex items-center"
            onClick={handlefirstDropdownToggle}
          >
            Sales & Persons
            <div className="ml-2">
              <AiOutlineDollarCircle />
            </div>
          </button>
          {firstDropdownVisible && (
            <ul
              className="py-3 absolute text-center w-full left-1/2 transform -translate-x-1/2 border-t-2 border-gray-600 top-full mt-[18px] bg-gray-900 text-gray-200"
              ref={firstDropdownRef}
            >
              <li className="p-2 font-bold text-base">
                <Link to="/salesrecord" onClick={handleNav} className="hover:text-green-200">
                  Sales Record
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/saleshistory" onClick={handleNav} className="hover:text-green-200">
                  Sales History
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/technicians" onClick={handleNav} className="hover:text-green-200">
                  Technician
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/salesperson" onClick={handleNav} className="hover:text-green-200">
                  Employee
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/customer" onClick={handleNav} className="hover:text-green-200">
                  Customer
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="p-4 mr-4 font-bold text-xl relative">
          <button
            className="hover:text-green-200 flex items-center"
            onClick={handlesecondDropdownToggle}
          >
            Vehicles
            <div className="ml-2">
              <BiCar />
            </div>
          </button>
          {secondDropdownVisible && (
            <ul
              className="py-3 absolute text-center w-full left-1/2 transform -translate-x-1/2 border-t-2 border-gray-600 top-full mt-[18px] bg-gray-900 text-gray-200"
              ref={secondDropdownRef}
            >
              <li className="p-2 font-semibold text-base">
                <Link to="/manufacturers" onClick={handleNav} className="hover:text-green-200">
                  Manufacturers
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/models" onClick={handleNav} className="hover:text-green-200">
                    Models
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/autos" onClick={handleNav} className="hover:text-green-200">
                    Automobiles
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="p-4 mr-4 font-bold text-xl relative">
          <button
            className="hover:text-green-200 focus:text-green-200 flex items-center"
            onClick={handleAppointmentDropdownToggle}
          >
            Appointment
            <div className="ml-2">
              <AiOutlineSchedule />
            </div>
          </button>
          {appointmentDropdownVisible && (
            <ul
              className="py-3 absolute text-center w-full left-1/2 transform -translate-x-1/2 border-t-2 border-gray-600 top-full mt-[18px] bg-gray-900 text-gray-200"
              ref={appointmentDropdownRef}
            >
              <li className="p-2 font-semibold text-base">
                <Link to="/appointments" onClick={handleNav} className="hover:text-green-200">
                  Active Appointments
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/servicehistory" onClick={handleNav} className="hover:text-green-200">
                  Appointment History
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden pt-2 flex justify-end pr-1">
          <AiOutlineMenu size={30} />
        </div>
        <div
          className={
            nav
              ? "fixed top-0 right-0 lg:w-[20%] md:w-[30%] sm:w-[30%] w-[30%] h-full bg-black text-gray-200 ease-in-out duration-500 transition-all"
              : "hidden lg:hidden"
          }
        >
          <div onClick={handleNav} className="flex justify-end pr-4 pt-7">
            <AiOutlineClose size={30} />
          </div>
          <ul className="bg-black text-gray-200 h-screen pl-4">
              <li className="p-2 font-bold text-base">
                <Link to="/salesrecord" onClick={handleNav} className="hover:text-green-200">
                  Sales Record
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/saleshistory" onClick={handleNav} className="hover:text-green-200">
                  Sales History
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/technicians" onClick={handleNav} className="hover:text-green-200">
                  Technician
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/salesperson" onClick={handleNav} className="hover:text-green-200">
                  Employee
                </Link>
              </li>
              <li className="p-2 font-bold text-base">
                <Link to="/customer" onClick={handleNav} className="hover:text-green-200">
                  Customer
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/manufacturers" onClick={handleNav} className="hover:text-green-200">
                  Manufacturers
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/models" onClick={handleNav} className="hover:text-green-200">
                    Models
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/autos" onClick={handleNav} className="hover:text-green-200">
                    Automobiles
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/appointments" onClick={handleNav} className="hover:text-green-200">
                  Active Appointments
                </Link>
              </li>
              <li className="p-2 font-semibold text-base">
                <Link to="/servicehistory" onClick={handleNav} className="hover:text-green-200">
                  Appointment History
                </Link>
              </li>
          </ul>
        </div>
    </div>
  );
}

export default Nav;
