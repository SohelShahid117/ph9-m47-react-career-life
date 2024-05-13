import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
//47-8 Display Applied Jobs From Stored Ids
//47-9 Implement Job Filter And Deploy To Netlify And Surge

const Applied = () => {
  const allJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  console.log(allJobs);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (allJobs.length > 0) {
      // const jobsApplied = allJobs.filter((jbs) =>
      //   storedJobIds.includes(jbs.id)
      // );
      // console.log(allJobs, storedJobIds, jobsApplied);

      const jobApplied = [];
      for (let id of storedJobIds) {
        const job = allJobs.find((jb) => jb.id == id);
        // const job = allJobs.filter((jb) => jb.id == id);
        console.log(job);
        if (job) {
          jobApplied.push(job);
        }
      }
      // console.log(jobApplied);
      setAppliedJobs(jobApplied);

      console.log(allJobs, storedJobIds, jobApplied);
    }
  }, []);

  return (
    <div>
      {/* <h2>Jobs I applied : {appliedJobs.length} </h2> */}
      <p>jobs applied are : {appliedJobs.length}</p>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>OnSite</a>
          </li>
        </ul>
      </div>
      <ul>
        {appliedJobs.map((jb) => (
          <li>
            <span>{jb.job_title}</span>
            <p>hi</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applied;
