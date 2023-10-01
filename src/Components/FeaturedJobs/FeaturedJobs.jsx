import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mb-24 text-center">
            <h2 className='text-4xl text-[#1A1919] font-extrabold '>Featured Jobs</h2>
            <p className=" text-[#757575] font-medium mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn normal-case bg-[#9873FF] text-white text-xl font-extrabold mt-10">
                    See All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;