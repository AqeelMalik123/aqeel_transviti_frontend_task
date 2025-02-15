
import { FaBookmark, FaClock, FaMapPin } from "react-icons/fa";

interface JobCardProps {
  jobTitle: string;
  location: string;
  posted: string;
  applicants: number;
  companyLogo: string;
}

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  location,
  posted,
  applicants,
  companyLogo,
}) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 ">
      {/* Promoted Label */}
      <p className="text-xs font-bold text-gray-600">Promoted</p>

      {/* Job Info */}
      <div className="flex items-center mt-2 space-x-3">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-7 h-7 rounded-lg"
        />
        <div>
          <h2 className="text-lg font-semibold">{jobTitle}</h2>
          <p className="text-gray-500 text-sm">Teams</p>
        </div>
      </div>

      {/* Location & Time */}
      <div className="mt-3 text-gray-600 text-sm space-y-1">
        <div className="flex items-center space-x-2">
          <FaMapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock className="h-4 w-4" />
          <span>
            {posted} |{" "}
            <a href="#" className="text-blue-600">
              {applicants} applicants
            </a>
          </span>
        </div>
      </div>

      {/* Apply Button & Bookmark */}
      <div className="flex items-center justify-between mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Apply Now
        </button>
        <FaBookmark className="h-5 w-5 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default JobCard;
