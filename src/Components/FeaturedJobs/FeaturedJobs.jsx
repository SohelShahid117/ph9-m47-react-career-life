import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
//47-3 Load Jobs Data For The Page

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobsss.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs:{jobs.length}</h2>
        <p>
          Welcome to the tutorial! We'll be building a small, but feature-rich
          app that lets you keep track of your contacts. We expect it to take
          between 30-60m if you're following along.
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
