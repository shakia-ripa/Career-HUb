import PropTypes from 'prop-types';
import { CiDollar, CiLocationOn } from 'react-icons/ci';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='text-left w-auto border-2 border-[#E8E8E8] rounded-lg p-10'>
            <img src={logo} alt="" />
            <h3 className='text-2xl font-extrabold text-[#474747] mt-7 mb-3'>{job_title}</h3>
            <p className='text-xl font-semibold text[#757575]'>{company_name}</p>
            <div className='my-4 flex gap-4 text-[#9873FF] font-bold'>
                <button className='border-2 border-[#9873FF] rounded-md px-4 py-1'>{remote_or_onsite}</button>
                <button className='border-2 border-[#9873FF] rounded-md px-4 py-1'>{job_type}</button>
            </div>
            <div className='mb-6 flex gap-6 text-xl font-semibold'>
                <p className='flex items-center gap-2'>

                    <CiLocationOn></CiLocationOn>
                    <span>{location}</span>

                </p>
                <p className='flex items-center gap-2'>

                    <CiDollar></CiDollar>
                    <span>{salary}</span>
                </p>
            </div>
            <button className='btn normal-case text-white bg-[#9873FF] text-xl font-bold '>View Details</button>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}

export default Job;