import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
//47-6 Load Job Details Page And Display

const JobDetails = () => {
  const jobs = useLoaderData();
  //   console.log(jobs);
  const { id } = useParams();
  //   console.log(id);
  const job = jobs.find((jb) => jb.id == id);
  console.log(job);

  //   const {
  //     logo,
  //     job_title,
  //     company_name,
  //     location,
  //     job_type,
  //     salary,
  //     job_description,
  //     job_responsibility,
  //     educational_requirements,
  //     experiences,
  //     contact_information,
  //     remote_or_onsite,
  //     phone,
  //     email,
  //     address,
  //   } = job;

  return (
    <div>
      <h2>Job details of : {id}</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="w-[70%] border">
          <img src={job.logo} alt="" />
          <h2>{job.company_name}</h2>
          <p>{job.job_description}</p>
          <h4>{job.job_responsibility}</h4>
          <h5>{job.educational_requirements}</h5>
        </div>
        <div className="w-[30%] border">
          <h2>{job.job_title}</h2>
          <h3>{job.location}</h3>
          <p>{job.job_type}</p>
          <b>{job.salary}</b>
          <h2>{job.experiences}</h2>
          <b>{job.contact_information}</b>
          <p>{job.remote_or_onsite}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
