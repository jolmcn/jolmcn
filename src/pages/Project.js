import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Project = () => {
  const { id } = useParams();
  const {loading, error, data} = useFetch("https://strapi-production-07a4.up.railway.app://api/projects/" + id + "?populate=*");
  
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
  // if(data) return <p>{data.data.data.attributes.Title}</p>
  const thumbnailAddress = "https://strapi-production-07a4.up.railway.app:" + data.attributes.thumbnail.data.attributes.url;
  return ( 
    <>
      <Navigation />
      <div className="projectContainer">
        <div className="projectNav">
          <NavLink to="/projects" className="backToProjects"></NavLink>
        </div>
        <div className="projectHero" style={{backgroundImage: `url(${thumbnailAddress})`}}></div>
        <div className="projectSubContent">
          <h2 className="projectDetails"><span className="projectCompany">{data.attributes.ProjectCompany}</span>  <span className="projectDate">{data.attributes.Date.substring(0,4)}</span></h2>
          <h1 className="projectTitle">{data.attributes.ProjectTitle}</h1>
          {/* <h3 className="projectDate">—{data.attributes.Date.substring(0,4)}</h3> */}
          <Markdown className="projectContent">
            {data.attributes.ProjectContent}
          </Markdown>
        </div>
      </div>
      <Footer />
    </>
  )
  };
  
  export default Project;