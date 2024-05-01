//47-8 Display Applied Jobs From Stored Ids
const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    else{
        return []
    }
}


const saveJobApplication = id =>{

    const storedJobApplicationsss = getStoredJobApplication()
    const existsId = storedJobApplicationsss.find((jobId)=>jobId==id)
    if(!existsId){
        storedJobApplicationsss.push(id)
        localStorage.setItem('job-application',JSON.stringify(storedJobApplicationsss))
    }

}
export {saveJobApplication,getStoredJobApplication}