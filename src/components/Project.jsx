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
    <section className="projects content-wrapper" id="projects">
      <h2>My Work</h2>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.image} alt="" srcset="" width="50%" />
              <h3>{project.slug}</h3>
              <p>{project.content}</p>

              <div className="livePage">
                <p>
                  <a href={project.url}>Live Page </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
