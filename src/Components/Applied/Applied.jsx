import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
//47-8 Display Applied Jobs From Stored Ids

const Applied = () => {
  const allJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState();
  console.log(allJobs);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (allJobs.length > 0) {
      // const jobsApplied = allJobs.filter((jbs) =>
      //   storedJobIds.includes(jbs.id)
      // );

      const jobApplied = [];
      for (id of storedJobIds) {
        const job = allJobs.find((jb) => jb.id == id);
        if (job) {
          jobApplied.push(job);
        }
      }
      console.log(jobApplied);
      setAppliedJobs(jobApplied);
    }
  }, []);
  return (
    <div>
      <h2>Jobs I applied : {appliedJobs.length} </h2>
    </div>
  );
};

export default Applied;
