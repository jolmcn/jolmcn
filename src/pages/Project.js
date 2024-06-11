import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { motion, AnimatePresence } from "framer-motion";
const Project = () => {
  const { id } = useParams();
  
  const [project, setProject] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://strapi-production-07a4.up.railway.app/api/projects/" + id + "?populate=*")
      .then(({ data }) => setProject(data.data))
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  });


  if(loading) return <Loading />
  if(error) return <p>Error</p>


  const thumbnailAddress = project.attributes.ProjectThumb.data.attributes.formats.large.url;
  
  return ( 
    <>
      <Navigation />
      <div className="pageContainer">
        <div className="projectContainer">
          <div className="projectNav">
            <NavLink to="/projects" className="backToProjects"></NavLink>
          </div>
          {loading?<p>Loading...</p>:
          <><div className="projectHero" style={{backgroundImage: `url(${thumbnailAddress})`}}></div>
          <div className="projectSubContent">
            <h2 className="projectDetails">
              <span className="projectCompany">{project.attributes.ProjectCompany}</span>  
              <span className="projectDate">{project.attributes.ProjectDate.substring(0,4)}</span>
            </h2>
            <h1 className="projectTitle">{project.attributes.ProjectTitle}</h1>
            {/* <h3 className="projectDate">—{data.attributes.ProjectDate.substring(0,4)}</h3> */}
            <Markdown className="projectContent">
              {project.attributes.ProjectContent}
            </Markdown>
          </div>
          </>
          }
        </div>
      </div>
      <Footer />
    </>
  )
  };
  
  export default Project;