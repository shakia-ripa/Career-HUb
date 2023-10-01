import { useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";
import { BsCalendar2Week, BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));

    const { salary, job_title, contact_information, job_description, job_responsibility, educational_requirements, experiences } = job;

    const handleApplyJob = () =>{
        saveJobApplication(parseInt(id));
        toast('You have applied successfully')
    }

    return (
        <div className="my-20">
            <h2>Showing details of : {id}</h2>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6 text-[#757575] font-semibold">
                    <p>
                        <span className="text-[#1A1919] font-extrabold">Job Description:</span> 
                        {job_description}
                    </p>
                    <p>
                        <span className="text-[#1A1919] font-extrabold">Job Responsibility:</span>
                        {job_responsibility}
                    </p>
                    <p>
                        <span className="text-[#1A1919] font-extrabold">Educational Requirements:</span>
                        <br />
                        {educational_requirements}
                    </p>
                    <p>
                        <span className="text-[#1A1919] font-extrabold">Experiences:</span>
                        <br />
                        {experiences}
                    </p>

                </div>
                <div>
                    <div className="bg-[#6273FF1A] rounded-lg p-7">
                        <h3 className="border-b-2 pb-3 text-lg text-[#1A1919] font-bold">Job Details</h3>
                        <div>
                            <p className='flex items-center gap-2'>

                                <span className="text-[#9873FF]"><BiDollarCircle></BiDollarCircle></span>
                                <span>Salary: {salary}</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className="text-[#9873FF]">
                                    <BsCalendar2Week></BsCalendar2Week>
                                </span>
                                <span>Job Title: {job_title}</span>
                            </p>
                        </div>
                        <h3 className="border-b-2 pb-3  text-base text-[#1A1919] font-bold">Contact Information</h3>
                        <div>
                            <p className='flex items-center gap-2'>
                                <span className="text-[#9873FF]">
                                    <BsTelephone></BsTelephone>
                                </span>
                                <span>Phone: {contact_information.phone}</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className="text-[#9873FF]">
                                    <HiOutlineMail></HiOutlineMail>
                                </span>
                                <span>Email: {contact_information.email}</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className="text-[#9873FF]">
                                    <HiOutlineLocationMarker></HiOutlineLocationMarker>
                                </span>
                                <span>Address: {contact_information.address}</span>
                            </p>
                        </div>

                    </div>

                    <button onClick={handleApplyJob} className="btn bg-[#9873FF] font-extrabold mt-5 w-full text-white normal-case">
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;