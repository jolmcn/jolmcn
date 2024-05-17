import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Projects = () => {
    
  const [projects, setProjects] = useState([]);
  // const [fetchProjects, setFetchProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/projects?populate=*")
      .then(({ data }) => setProjects(data.data))
      .catch((error) => setError(error));
  }, []);

  return ( 
      <>
        <Navigation />
        {error && <p>Error: {error.message}</p>}
        <div className="projectList grid grid-cols-2">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Link to={`/projects/${project.id}`} activeClassName="active">
                  <div className="projectLeft">
                    <div className="projectTitle">{project.attributes.Title}</div>
                    <div className="projectDate">{project.attributes.Date.substring(0,4)}</div>
                    <div className="projectBrief">{project.attributes.summary.substring(0,100)+'...'}</div>
                    <div className="projectLink"></div>
                  </div>
                  <span className="projectImage" style={{backgroundImage:`url(http://localhost:1337${project.attributes.thumbnail.data.attributes.formats.medium.url}  )`}}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </>
    )
  };
  
  export default Projects;