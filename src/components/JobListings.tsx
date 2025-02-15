
import JobCard from "./JobCard";
import teamslogo from "../assets/images/teamslogo.png";

const JobListings = () => {
  const jobs = [
    {
      jobTitle: "UI/UX Designer",
      location: "Seattle, USA (Remote)",
      posted: "1 day ago",
      applicants: 22,
      companyLogo: teamslogo,
    },
    {
      jobTitle: "Graphic Designer",
      location: "Remote",
      posted: "4 days ago",
      applicants: 10,
      companyLogo: teamslogo,
    },
    {
      jobTitle: "Graphic Designer",
      location: "Remote",
      posted: "4 days ago",
      applicants: 10,
      companyLogo: teamslogo,
    },
    {
      jobTitle: "Graphic Designer",
      location: "Remote",
      posted: "4 days ago",
      applicants: 10,
      companyLogo: teamslogo,
    },
  ];

  return (
    <section className="mt-6 space-y-6">
      <div>
        <div className="my-2 space-x-1 ">
          <h2 className="text-xl font-semibold mb-4 inline">Featured Jobs</h2>{" "}
          <span className="text-sm text-blue-500 border-b border-blue-500">
            See Featured Jobs
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
      <div>
        <div className="my-2 space-x-1 ">
          <h2 className="text-xl font-semibold mb-4 inline">
            Recommended Jobs
          </h2>{" "}
          <span className="text-sm text-blue-500 border-b border-blue-500">
            See Recommended Jobs
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
