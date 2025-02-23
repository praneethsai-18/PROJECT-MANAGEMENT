import React, { useState } from 'react'
import ProjectForm from '../components/ProjectForm'
import ProjectList from '../components/ProjectList'

function Dashboard() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <section className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your project management dashboard. Here you can manage your projects.</p>
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} />
    </section>
  );
}

export default Dashboard;
