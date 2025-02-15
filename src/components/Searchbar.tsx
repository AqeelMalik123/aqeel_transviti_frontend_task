
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-sm rounded-lg  p-2 py-4 w-full my-6 ">
      {/* Job Title Input */}
      <input
        type="text"
        placeholder="Job Title, Company, or Keywords"
        className="flex-1 px-4 py-2 text-gray-600 outline-none bg-transparent"
      />

      {/* Divider */}
      <span className="border-l border-gray-200 h-6 mx-3"></span>

      {/* Location Dropdown */}
      <select className="text-gray-600 bg-transparent outline-none">
        <option>Select Location</option>
        <option>Remote</option>
        <option>New York</option>
        <option>San Francisco</option>
      </select>

      {/* Divider */}
      <span className="border-l h-6 mx-3 border-gray-200"></span>

      {/* Job Type Dropdown */}
      <select className="text-gray-600 bg-transparent outline-none">
        <option>Job Type</option>
        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Internship</option>
      </select>

      {/* Search Button */}
      <button className="ml-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        <FaSearch className="h-4 w-4 mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
