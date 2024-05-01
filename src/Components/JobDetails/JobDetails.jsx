import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LocalStorage from "../../Utility/LocalStorage";
import { saveJobApplication } from "../../Utility/LocalStorage";
//47-6 Load Job Details Page And Display

const JobDetails = () => {
  const jobs = useLoaderData();
  //   console.log(jobs);
  const { id, logo } = useParams();
  //   console.log(id);
  const job = jobs.find((jb) => jb.id == id);
  console.log(job);

  //   const notify = () => toast("Wow so easy!");
  const handleJobApply = () => {
    saveJobApplication(id);
    toast("You have applied successfully!");
  };

  // const {
  //   logo,
  //   job_title,
  //   company_name,
  //   location,
  //   job_type,
  //   salary,
  //   job_description,
  //   job_responsibility,
  //   educational_requirements,
  //   experiences,
  //   contact_information,
  //   remote_or_onsite,
  //   phone,
  //   email,
  //   address,
  // } = job;

  return (
    <div>
      {/* <h2>Job details of : {id}</h2>
      <p>{job.job_title}</p>
      <p>{job.educational_requirements}</p>
      <p>{job.experiences}</p>
      <p>{job.description}</p>
      <p>{job.job_responsibility}</p>
      <p>{job.location}</p>
      <img src={job.logo} alt="" />
      <p>{job.remote_or_onsite}</p>
      <p>{job.salary}</p> */}
      {/* <p>{job}</p> */}
      <div className="grid grid-cols-2 gap-5">
        <div className="w-[80%] border">
          <img src={job.logo} alt="" />
          {/* <h2>{job.company_name}</h2> */}
          <p>{job.description}</p>
          <h4>{job.job_responsibility}</h4>
          <h5>{job.educational_requirements}</h5>
        </div>
        <div className="w-[20%] border">
          <h2>{job.job_title}</h2>
          <h3>{job.location}</h3>
          {/* <p>{job.job_type}</p> */}
          <b>{job.salary}</b>
          <h2>{job.experiences}</h2>
          {/* <b>{job.contact_information}</b> */}
          <p>{job.remote_or_onsite}</p>
          {/* <button onClick={notify} className="btn btn-primary">
            Apply Now
          </button> */}
          <Link to="/applied">
            <button onClick={handleJobApply} className="btn btn-primary">
              Apply Now
            </button>
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
