import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        {projects.length > 0 ? (
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={6000}
            infiniteLoop={true}
          >
            {projects.map((project) => (
              <div key={project.id}>
                <div className="project-flex-container">
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-flex-contents">
                    <h3>{project.title}</h3>
                    <h4>{project.slug}</h4>
                    <p>{project.content}</p>
                    <div className="livePage">
                      <p>
                        <a href={project.url}>
                          <i className="fa-brands fa-github" /> GitHub
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </section>
  );
}
