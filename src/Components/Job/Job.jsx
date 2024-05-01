import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";
//47-5 Add Icons And Handle Show All Jobs

const Job = ({ job }) => {
  //   console.log(job);
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    remote_or_onsite,
  } = job;
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl scroll-my-12 flex-grow-0">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="gap-5">
            <button className="px-5 py-2 border rounded border-3 font-extrabold border-cyan-600 mr-4 text-blue-400">
              {job_type}
            </button>
            <button className="px-5 py-2 border rounded border-3 font-extrabold border-cyan-600 text-blue-400">
              {remote_or_onsite}
            </button>
          </div>
          <div className="flex">
            <div className="mr-5">
              <h2 className="flex items-center text-2xl">
                <IoLocationOutline /> {location}
              </h2>
            </div>
            <div>
              <h2 className="flex items-center text-2xl">
                {" "}
                <BsCurrencyDollar /> {salary}
              </h2>
            </div>
          </div>
          <div className="card-actions ">
            {/* <Link>
              <button className="btn btn-primary">Show Job Details</button>
            </Link> */}
            <NavLink to={`/job/${id}`}>
              <button className="btn btn-primary">Show Job Details</button>
            </NavLink>
            {/* <button className="btn btn-primary">Show Job Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
