import { useState, useEffect } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      let response = await fetch("https://laravel.stephenf.ca/api/projects");
      let data = await response.json();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <section className="projects p-content-wrapper" id="projects">
      <h2>My Projects</h2>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <div className="project-flex-container">
                <img src={project.image} width="45%" />
                <div className="project-flex-contents">
                  <h3>{project.title}</h3>
                  <h4>{project.slug}</h4>
                  <p>{project.content}</p>
                  <div className="livePage">
                    <p>
                      <a href={project.url}>Live Page </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
