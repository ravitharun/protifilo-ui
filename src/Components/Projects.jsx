import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiLink, FiGithub } from "react-icons/fi"; // Import icons from react-icons
import './Projects.css'; // Create a CSS file for additional styling

function Projects() {
  const [myprojects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    const projects = [
      { 
        id: "1",
        Project_tittle: "Calculator",
        Project_live_link: "https://bespoke-starship-58bc1c.netlify.app/", // Empty string for live link
        project_img: "https://via.placeholder.com/150",
        Project_desc: "A simple calculator built using React.",
        Project_Technologies: "React",
        Project_Githubrepo: "https://github.com/ravitharun/FULLSTACKPROJECT/tree/main/calculator"
      },
      {
        id: "2",
        Project_tittle: "Weather App",
        Project_live_link: "1", // Empty string for live link
        project_img: "https://via.placeholder.com/150",
        Project_desc: "A weather app that shows current weather data using an external API.",
        Project_Technologies: "React, API",
        Project_Githubrepo: "https://github.com/example/weather-app"
      },
      {
        id: "3",
        Project_tittle: "Github Repo Finder",
        Project_live_link: "https://wonderful-pixie-06f7cf.netlify.app/", // Valid link
        project_img: "https://via.placeholder.com/150",
        Project_desc: "A GitHub repository finder with search functionality.",
        Project_Technologies: "React, GitHub API",
        Project_Githubrepo: "https://github.com/example/github-repo-finder"
      },
      {
        id: "4",
        Project_tittle: "Todo Application",
        Project_live_link: "https://friendly-conkies-e76088.netlify.app/", // Valid link
        project_img: "https://via.placeholder.com/150",
        Project_desc: "A Todo Application Where We can Add Todo And find with search functionality. And Edit And Delete them",
        Project_Technologies: "React",
        Project_Githubrepo: "https://github.com/example/github-repo-finder"
      },
      {
        id: "5",
        Project_tittle: "Recipe Finder",
        Project_live_link: "https://unrivaled-valkyrie-7cfde5.netlify.app/", // Valid link
        project_img: "https://via.placeholder.com/150",
        Project_desc: "updating soon",
        Project_Technologies: "React",
        Project_Githubrepo: "https://github.com/example/github-repo-finder"
      },
    ];

    setProjects(projects);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Protifilo</h2>
        <div className="row " >
          {myprojects.map((data, index) => (
            <div className="col-md-4 mb-4"  id ="card"key={index} data-aos="fade-up">
              <div className="card project-card shadow-sm">
                <div className="project-img-container">
                  <img
                    src={data.project_img}
                    className="card-img-top"
                    alt={`project ${data.id}`}
                  />
                  <div className="hover-icons">
                    {data.Project_live_link && data.Project_live_link.trim() !== "" && ( // Ensure the live link is non-empty
                      <a
                        href={data.Project_live_link}
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiLink size={30} />
                      </a>
                    )}
                    <a
                      href={data.Project_Githubrepo}
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={24} />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-secondary">{data.Project_tittle}</h5>
                  <p className="card-text">{data.Project_desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
