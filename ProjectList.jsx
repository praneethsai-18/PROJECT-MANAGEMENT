import React from 'react'

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      <h2>Project List</h2>
      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
