import React from "react";

const Job = ({ job }) => {
  //   console.log(job);
  const { id, logo, job_title, company_name, location } = job;
  return (
    <div>
      <img src={logo}></img>
      <p>hello</p>
    </div>
  );
};

export default Job;
