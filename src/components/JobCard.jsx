function JobCard({ job, deleteJob }) {
  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <button onClick={deleteJob}>Delete</button>
    </div>
  );
}

export default JobCard;