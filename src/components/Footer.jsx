import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className="footerNav">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Footer;