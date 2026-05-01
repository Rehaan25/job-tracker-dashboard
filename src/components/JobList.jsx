import JobCard from "./JobCard.jsx";

function JobList({ jobs, deleteJob }) {
  return (
    <div>
      {jobs.length === 0 ? (
        <p>No jobs added yet</p>
      ) : (
        jobs.map((job, index) => (
          <JobCard
            key={index}
            job={job}
            deleteJob={() => deleteJob(index)}
          />
        ))
      )}
    </div>
  );
}

export default JobList;