import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Projects = () => {
    
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://strapi-production-07a4.up.railway.app/api/projects?populate=*")
      .then(({ data }) => setProjects(data.data))
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  }, []);

  if(loading) return <Loading />

  return ( 
      <>
        <Navigation />
        {error && <p>Error: {error.message}</p>}
        <div className="pageContainer">
          <div className="projectList grid grid-cols-2">
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link to={`/projects/${project.id}`} activeClassName="active">
                    <div className="projectLeft">
                      <div className="projectTitle">{project.attributes.ProjectTitle}</div>
                      <div className="projectDate">{project.attributes.ProjectDate.substring(0,4)}</div>
                      <div className="projectBrief">{project.attributes.ProjectAbstract}</div>
                      <div className="projectLink"></div>
                    </div>
                    <span className="projectImage" style={{backgroundImage:`url(${project.attributes.ProjectThumb.data.attributes.formats.medium.url}  )`}}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    )
  };
  
  export default Projects;