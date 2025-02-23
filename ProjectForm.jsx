import React, { useState } from 'react'

function ProjectForm({ addProject }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addProject({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/>
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br/>        <button className="create" type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
