import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { IoIosArrowDown } from "react-icons/io";

const SidebarProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const interviews = [
    { id: 1, company: "Google", date: "Feb 20, 2025", time: "10:00 AM" },
    { id: 2, company: "Microsoft", date: "Feb 22, 2025", time: "2:00 PM" },
    { id: 3, company: "Amazon", date: "Feb 25, 2025", time: "4:00 PM" },
  ];

  return (
    <aside className=" lg:w-3/12 p-6 pl-8 pr-0  ">
      <ProfileCard />

      <div className="mt-6 bg-white p-4 rounded-lg">
        <div className="flex justify-between text-gray-600 mt-4">
          <span>Profile Visitors</span>
          <span className="font-semibold text-blue-600">140</span>
        </div>
        <div className="border-b border-gray-200 h-1"></div>
        <div className="flex justify-between text-gray-600 mt-4">
          <span>Resume Viewers</span>
          <span className="font-semibold text-blue-600">20</span>
        </div>
        <div className="border-b border-gray-200 h-1"></div>
        <div className="flex justify-between text-gray-600 mt-4">
          <span>My Jobs</span>
          <span className="font-semibold text-blue-600">88</span>
        </div>
      </div>

      {/* Accordion for My Calendar */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="text-lg font-semibold">My calendar</h3>
            <p className="text-sm text-gray-500">Upcoming Interviews</p>
          </div>
          <IoIosArrowDown
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-gray-200 pt-2 text-gray-700 text-sm">
            {interviews.length > 0 ? (
              <ul>
                {interviews.map((interview) => (
                  <li key={interview.id} className="py-2">
                    <strong>{interview.company}</strong> - {interview.date},{" "}
                    {interview.time}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No upcoming interviews.</p>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarProfile;
