import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import dp1 from "../assets/images/dp1.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-6" />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-600">
          <li className="font-semibold text-blue-700">Find Jobs</li>
          <li>Top Companies</li>
          <li>Job Tracker</li>
          <li>My Calendar</li>
          <li>Documents</li>
          <li>Messages</li>
          <li>Notifications</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FaSearch className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm px-2 h-4"
          />
        </div>

        {/* Resume Builder Button */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
          Resume Builder
        </button>

        {/* Profile Image */}
        <img src={dp1} alt="Profile" className="h-8 w-8 rounded-full border" />
      </div>
    </nav>
  );
};

export default Navbar;
