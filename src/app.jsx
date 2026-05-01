import { useState, useEffect } from "react";
import JobForm from "./components/JobForm.jsx";
import JobList from "./components/JobList.jsx";
import "./app.css";

function App() {
  const [jobs, setJobs] = useState([]);

  // Load saved jobs
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (savedJobs) setJobs(savedJobs);
  }, []);

  // Save jobs
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const updated = jobs.filter((_, i) => i !== index);
    setJobs(updated);
  };

  return (
    <div className="container">
      <h1>AI Job Tracker Dashboard</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
}

export default App;